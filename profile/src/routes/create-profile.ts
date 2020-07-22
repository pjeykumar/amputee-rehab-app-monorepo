import express, { Request, Response } from 'express';
import { currentUser, validateRequest, BadRequestError, requireAuth } from '@amp-rehab-app/common';
import { body } from 'express-validator';
import { Profile } from '../models/profile';
const router = express.Router();


router.post(
    '/api/users/profile',
    [
        body('isMilitary').isBoolean().withMessage('You need to select whether you have served or are currently serving.'),
        body('profilePic').optional(),
        body('bio').optional(),
        body('email').not().isEmpty().withMessage('You need to provide your email'),
        body('fullName').not().isEmpty().withMessage('You need to provide your full name'),
        body('displayName').not().isEmpty().withMessage('You need to provide your display name'),
    ],
    currentUser,
    requireAuth,
    validateRequest,
    async (req: Request, res: Response) => {
        const { isMilitary, branch, serviceId, email, fullName, displayName, profilePic, bio } = req.body;

        const existingProfile = await Profile.find({ email: email});

        if(existingProfile){
            res.status(409);
        }

        if(req.body.isMilitary){
            if(!req.body.branch && !req.body.serviceId){
                throw new BadRequestError('Branch and service Id is required!');
            }

            if(!req.body.branch || !req.body.serviceId){
                throw new BadRequestError('Branch or service Id has not been inputted.');
            }
        }

        const profile = await Profile.build({ userId: req.currentUser!.id, isMilitary, branch, serviceId, email, fullName, displayName, profilePic, bio });

        await profile.save();

        res.status(201).send(profile);
    },
);

export { router as newProfileRouter };