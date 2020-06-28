import * as express from 'express';
import { passport } from "../config/passport";
import {Request, Response} from "express";
const router = express.Router();

router.get('/strava/auth/callback', 
  passport.authenticate('strava', { failureRedirect: '/login' }), (req: Request, res: Response) => {
    res.redirect('/account')
});

export { router as stravaCallbackRouter };