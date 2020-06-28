import * as express from 'express';
import * as authenticated from "../config/isAuthenticated";
import {Request, Response} from "express";

const router = express.Router();

router.get('/account', authenticated.isAuthenticated, (req: Request, res: Response) =>{
    console.log(res)
    res.send("ONLY STRAVA ACCESS ALLOWED!");
});

export { router as authenticatedStravaRouter };
  