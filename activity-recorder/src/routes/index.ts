import express, { Request, Response } from 'express';
import { currentUser, requireAuth } from '@amp-rehab-app/common';
import { Activity } from '../models/activity';

const router = express.Router();

router.get('/api/activity', currentUser, requireAuth, async (req: Request, res: Response) => {
    const usersActivities = await Activity.find({ userId: req.currentUser?.id });
    res.status(200).send(usersActivities);
});

export { router as indexActivityRouter };
