import request from 'supertest';
import { app } from '../../app';
import { Activity } from '../../models/activity';
import mongoose from 'mongoose';

const createActivity = (cookie: string[], body: any) => {
    return request(app).post('/api/activity').set('Cookie', cookie).send(body);
};

describe('Update activity route handler', () => {
    let id: string;
    let cookie: string[];
    let body = { exercise: 'run', duration: 10 };

    beforeEach(() => {
        id = mongoose.Types.ObjectId().toHexString();
        cookie = global.signin();
        body = { exercise: 'run', duration: 10 };
    });

    it('has a route handler listening to PUT /api/activity/:id', async () => {
        const createResp = await createActivity(global.signin(), body);

        const resp = await request(app).put(`/api/activity/${createResp.body.id}`).send(body);
        expect(resp.status).not.toEqual(404);
    });

    it('should return 401 if not authenticated', async () => {
        await request(app).put(`/api/activity/${id}`).send(body).expect(401);
    });

    it('should return other than 401 if is logged in', async () => {
        const response = await request(app).put(`/api/activity/${id}`).set('Cookie', cookie).send(body);
        expect(response.status).not.toBe(401);
    });

    it('should return 403 if the user does not own the activity', async () => {
        const resp = await createActivity(global.signin(), body);

        await request(app)
            .put(`/api/activity/${resp.body.id}`)
            .set('Cookie', cookie)
            .send({ exercise: 'run', duration: 5 })
            .expect(401);
    });

    it('should return 404 if activity id does not exist', async () => {
        await request(app).put(`/api/activity/${id}`).set('Cookie', global.signin()).send(body).expect(404);
    });

    it('should return 400 if incorrect payload', async () => {
        await request(app).put(`/api/activity/${id}`).set('Cookie', global.signin()).send({}).expect(400);
    });

    it('should return 202 if correct payload', async () => {
        const cookie = global.signin();
        const createResponse = await request(app)
            .post('/api/activity')
            .set('Cookie', cookie)
            .send({ exercise: 'run', duration: 10 });

        expect(await Activity.find({})).toHaveLength(1);

        const exercise = 'run';

        await request(app)
            .put(`/api/activity/${createResponse.body.id}`)
            .set('Cookie', cookie)
            .send({ exercise, duration: 5 })
            .expect(202);

        const activities = await Activity.find({});
        expect(activities.length).toBe(1);
        expect(activities[0].duration).toBe(5);
    });
});
