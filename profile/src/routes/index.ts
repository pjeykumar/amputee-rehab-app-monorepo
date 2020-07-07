import express, { Request, Response } from 'express';
import { currentUser, requireAuth } from '@amp-rehab-app/common';
import { Profile } from '../models/profile';

const router = express.Router();

router.get('/api/profile', [currentUser], [requireAuth], async (req: Request, res: Response) => {
    const userProfile = await Profile.find({ userId: req.currentUser?.id });
    res.status(200).send({userprofile: userProfile || null});
});

export { router as indexProfileRouter };
