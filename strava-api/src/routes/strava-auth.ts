import * as express from 'express';
import { passport } from "../config/passport";
const router = express.Router();

router.get('/strava/auth',
    passport.authenticate('strava',{scope: ['activity:read_all,activity:write']})
);

export { router as stravaAuthRouter };