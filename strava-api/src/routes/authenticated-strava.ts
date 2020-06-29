import * as express from 'express';
import * as authenticated from "../config/isAuthenticated";
import {Request, Response} from "express";
import axios from "axios";
import { extractActivityData } from "./extract-activity-data";

const router = express.Router();

router.get('/account', authenticated.isAuthenticated, async (req: Request, res: Response) =>{
    const access_token = res.locals.user.token;
    const response = await axios.get(
        `https://www.strava.com/api/v3/athlete/activities`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        }
    );
    
    const activities = JSON.stringify(response.data);
    console.log(activities);
    const activity = extractActivityData(req, activities);
    console.log(activity);
    res.send("Strava user is authenticated");
});

export { router as authenticatedStravaRouter };
  