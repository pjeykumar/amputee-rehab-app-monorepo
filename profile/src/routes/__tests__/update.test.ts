import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

const getProfile = (cookie: string[]) => {
    return request(app).get('/api/profile').set('Cookie', cookie)
};

describe('Update profile route handler', () => {
    let id: string;
    let cookie: string[];
    let body = { isServing: true, branch: 'testBranch', serviceId:'028292', email: 'test@gmail.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'};

    beforeEach(async () => { 
        id = mongoose.Types.ObjectId().toHexString();
        cookie = await global.signin();
    });

    it('has a route handler listening to PUT /api/activity/:id', async () => {
        const getResp = await getProfile(global.signin());

        const resp = await request(app).put(`/api/profile/${getResp.body.id}`).send(body);
        expect(resp.status).not.toEqual(404);
    });

    it('should return 401 if not authenticated', async () => {
        await request(app).put(`/api/profile/${id}`).send(body).expect(401);
    });

    it('should return other than 401 if is logged in', async () => {
        const response = await request(app).put(`/api/profile/${id}`).set('Cookie', cookie).send(body);
        expect(response.status).not.toBe(401);
    });

    it('responds with null if not authenticated', async () => {
        const response = await request(app).get(`/api/profile`).set('Cookie', cookie).send().expect(200);
        expect(response.body).toEqual(null);
    });

    it('should return 404 if profile does not exist', async () => {
        await request(app).put(`/api/profile/${id}`).set('Cookie', global.signin()).send(body).expect(404);
    });

    it('should return 400 if incorrect payload', async () => {
        await request(app).put(`/api/profile/${id}`).set('Cookie', global.signin()).send({}).expect(400);
    });
});
