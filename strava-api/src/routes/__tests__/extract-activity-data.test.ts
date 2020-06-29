import { Activity } from '../../../../activity-recorder/src/models/activity';
import { extractActivityData } from '../extract-activity-data';
import { Request } from 'express';


const mockRequest = {
    body: {
    userId: '1',
    username: 'TestUser',
    lastName: 'Doe',
    email: 'jdoe@abc123.com',
    },
} as Request;

describe('Strava get activity handler', () => {
    it('should return an activity from the list of athletes activities', async () => {
        const activitiesJson = `[{"resource_state":2,"athlete":{"id":62265454,"resource_state":1},"name":"Night Run","distance":10000,"moving_time":3600,"elapsed_time":3600,"total_elevation_gain":0,"type":"Run","workout_type":3,"id":3686100952,"external_id":null,"upload_id":null,"start_date":"2020-06-28T21:30:00Z","start_date_local":"2020-06-28T22:30:00Z","timezone":"(GMT+00:00) Europe/London","utc_offset":3600,"start_latlng":null,"end_latlng":null,"location_city":null,"location_state":null,"location_country":"United Kingdom","start_latitude":null,"start_longitude":null,"achievement_count":0,"kudos_count":0,"comment_count":0,"athlete_count":1,"photo_count":0,"map":{"id":"a3686100952","summary_polyline":null,"resource_state":2},"trainer":false,"commute":false,"manual":true,"private":false,"visibility":"everyone","flagged":false,"gear_id":null,"from_accepted_tag":null,"average_speed":2.778,"max_speed":0,"has_heartrate":false,"heartrate_opt_out":false,"display_hide_heartrate_option":false,"pr_count":0,"total_photo_count":0,"has_kudoed":false}]`;
        const userId = mockRequest.body.userId;
        const exercise = "Run";
        const duration = 3600
        const distance = 10000
        const difficulty = 3
        const description = "test strava";
        let photos: Array<string>;
        photos = ['test.png'];

        const newActivity = extractActivityData(mockRequest, activitiesJson);
        const expectedActivity = Activity.build({userId, exercise, duration, distance, difficulty, description, photos});
        
        console.log(newActivity);
        console.log(expectedActivity);
        expect(newActivity[0].exercise).toBe(expectedActivity.exercise);
    });
});