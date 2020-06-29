import express, { Request, Response } from 'express';
import { currentUser, requireAuth, validateRequest } from '@amp-rehab-app/common';
import { body } from 'express-validator';
import { Activity } from '../models/activity';

const router = express.Router();

router.post(
    '/api/activity',
    currentUser,
    requireAuth,
    [
        body('exercise').not().isEmpty().withMessage('You need to provide an exercise'),
        body('duration').isNumeric().withMessage('You need to provide a duration'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const { exercise, duration, distance, description, difficulty, photos,privacy } = req.body;

        const activity = Activity.build({ userId: req.currentUser!.id, exercise, duration, distance, description, difficulty, photos, privacy });

        await activity.save();

        res.status(201).send(activity);
    },
);

export { router as newActivityRouter };