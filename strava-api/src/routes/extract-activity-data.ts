import { Activity } from '../models/activity';
import { Request } from 'express';

export const extractActivityData = (req: Request, activities:any) => {
    let strava_activity;
    activities = JSON.parse(activities);
    activities.forEach((activity: any) => {
        const userId = "1";
        const exercise = activity.type;
        const duration = activity.elapsed_time;
        const distance = activity.distance;
        const difficulty = activity.workout_type;
        const description = "test strava";
        let photos: Array<string>;
        photos = ['test.png'];
        
        //user id should be replaced with req.userId but currently undefined
        //this is an example activity which would be sent using the NATS streaming server.
        strava_activity = Activity.build({ userId, exercise, duration, distance, description, difficulty, photos });
    });

    return strava_activity;
};