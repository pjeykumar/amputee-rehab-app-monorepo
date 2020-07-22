import express, { Request, Response } from 'express';
import { currentUser, requireAuth, NotFoundError} from '@amp-rehab-app/common';
import { Profile } from '../models/profile';

const router = express.Router();

router.get('/api/users/profile', currentUser, requireAuth, async (req: Request, res: Response) => {
    const profile = await Profile.findOne({ email: req.currentUser?.email});

    if(!profile){
        throw new NotFoundError();
    }
    
    res.status(200).send(profile);
});

export { router as indexProfileRouter };
