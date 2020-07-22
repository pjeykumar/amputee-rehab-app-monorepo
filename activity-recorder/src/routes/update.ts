import express, { Request, Response } from 'express';
import { currentUser, requireAuth, validateRequest, NotFoundError, NotAuthorisedError } from '@amp-rehab-app/common';
import { body } from 'express-validator';
import { Activity } from '../models/activity';

const router = express.Router();

router.put(
    '/api/activity/:id',
    currentUser,
    requireAuth,
    [
        body('exercise').not().isEmpty().withMessage('You need to provide an exercise'),
        body('duration').isNumeric().withMessage('You need to provide a duration'),
        body('distance').isNumeric().withMessage('You need to provide a distance'),
        body('difficulty').isNumeric().withMessage('You need to provide the exercise difficulty'),
        body('privacy').not().isEmpty().withMessage('You need to provide us with the privacy setting for this activity'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const activity = await Activity.findById(req.params.id);

        if (!activity) throw new NotFoundError();
        if (activity.userId !== req.currentUser?.id) throw new NotAuthorisedError();

        activity.exercise = req.body.exercise;
        activity.distance = req.body.distance;
        activity.duration = req.body.duration;
        activity.description = req.body.description;
        activity.difficulty = req.body.difficulty;
        activity.photos = req.body.photos;
        activity.privacy = req.body.privacy;


        await activity.save();

        res.status(202).send(activity);
    },
);

export { router as updateActivityRouter };
