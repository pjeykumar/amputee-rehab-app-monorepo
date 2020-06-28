import request from 'supertest';
import { app } from '../../app';
import { Activity } from '../../models/activity';

describe('New activity route handler', () => {
    it('has a route handler listening to POST /api/activity', async () => {
        const resp = await request(app).post('/api/activity').send({ exercise: 'run', duration: 10, distance: 10, description:'test exercise', difficulty:5, photos:null });
        expect(resp.status).not.toEqual(404);
    });

    it('can only be access if the user is signed in', async () => {
        await request(app).post('/api/activity').send({ exercise: 'run', duration: 10, distance: 10, description:'test exercise', difficulty:5, photos:null }).expect(401);
    });

    it('should return other than 401 if is logged in', async () => {
        const response = await request(app).post('/api/activity').set('Cookie', global.signin()).send({});
        expect(response.status).not.toBe(401);
    });

    it('should return 400 if incorrect payload', async () => {
        await request(app).post('/api/activity').set('Cookie', global.signin()).send({}).expect(400);
    });

    it('should return 201 if correct payload', async () => {
        const activities = await Activity.find({});
        expect(activities.length).toBe(0);

        const exercise = 'run';

        const response = await request(app)
            .post('/api/activity')
            .set('Cookie', global.signin())
            .send({ exercise, duration: 10, distance: 10, description:'test exercise', difficulty:5, photos:null})
            .expect(201);

        const newActivity = await Activity.findById(response.body.id);
        expect(newActivity?.exercise).toBe(exercise);
    });
});
