import express, { Request, Response } from 'express';
import { currentUser, requireAuth, validateRequest, NotFoundError, NotAuthorisedError } from '@amp-rehab-app/common';
import { body } from 'express-validator';
import { Profile } from '../models/profile';

const router = express.Router();

router.put(
    '/api/profile/:id',
    [currentUser],
    [requireAuth],
    [
        body('isServing').isBoolean().withMessage('You need to select whether you have served or are currently serving.'),
        body('branch').not().isEmpty().withMessage('You need to provide us with the military branch'),
        body('serviceId').not().isEmpty().withMessage('You need to provide your military service id'),
        body('email').not().isEmpty().withMessage('You need to provide your email'),
        body('fullName').not().isEmpty().withMessage('You need to provide your full name'),
        body('displayName').not().isEmpty().withMessage('You need to provide your display name'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const profile = await Profile.findById(req.params.id);

        if (!profile) throw new NotFoundError();
        if (profile.userId !== req.currentUser?.id) throw new NotAuthorisedError();

        profile.isServing = req.body.isServing;
        profile.branch = req.body.branch;
        profile.serviceId = req.body.serviceId;
        profile.email = req.body.email;
        profile.fullName = req.body.fullName;
        profile.displayName = req.body.displayName;
        profile.profilePic = req.body.profilePic;
        profile.bio = req.body.bio;

        await profile.save();

        res.status(202).send(profile);
    },
);

export { router as updateProfileRouter };
