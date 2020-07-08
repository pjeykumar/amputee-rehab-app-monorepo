import express, { Request, Response } from 'express';
import { currentUser, validateRequest } from '@amp-rehab-app/common';
import { body } from 'express-validator';
import { Profile } from '../models/profile';

const router = express.Router();

router.post(
    '/api/users/profile',
    [
        body('isServing').isBoolean().withMessage('You need to select whether you have served or are currently serving.'),
        body('branch').not().isEmpty().withMessage('You need to provide us with the military branch'),
        body('serviceId').not().isEmpty().withMessage('You need to provide your military service id'),
        body('email').not().isEmpty().withMessage('You need to provide your email'),
        body('fullName').not().isEmpty().withMessage('You need to provide your full name'),
        body('displayName').not().isEmpty().withMessage('You need to provide your display name'),
    ],
    [currentUser],
    validateRequest,
    async (req: Request, res: Response) => {
        const { isServing, branch, serviceId, email, fullName, displayName, profilePic, bio } = req.body;

        const profile = Profile.build({ userId: req.currentUser!.id, isServing, branch, serviceId, email, fullName, displayName, profilePic, bio });

        await profile.save();

        res.status(201).send(profile);
    },
);

export { router as newProfileRouter };