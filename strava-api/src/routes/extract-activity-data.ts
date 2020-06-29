import { Activity } from '../../../activity-recorder/src/models/activity';
import { Request } from 'express';

export const extractActivityData = (req: Request, activities:any) => {
    let strava_activities = Array<any>();
    let strava_activity;
    activities = JSON.parse(activities);
    activities.forEach((activity: any) => {
        strava_activity = new Activity();
        const userId = "1";
        const exercise = activity.type;
        const duration = activity.elapsed_time;
        const distance = activity.distance;
        const difficulty = activity.workout_type;
        const description = "test strava";
        let photos: Array<string>;
        photos = ['test.png'];
        
        //user id should be replaced with req.userId but currently undefined because common not being used.
        //this is an example activity which would be sent using the NATS streaming server.
        strava_activity = Activity.build({ userId, exercise, duration, distance, description, difficulty, photos });
    });

    strava_activities.push(strava_activity);

    return strava_activities;
};