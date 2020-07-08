import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';

const createProfile = async (cookie: string[]) => {
    return request(app).post('/api/users/profile').set('Cookie', cookie).send({ isServing: true, branch: 'testBranch', serviceId:'028292', email: 'test@gmail.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'});
}

describe('Update profile route handler', () => {
    let id: string;
    let cookie: string[];
    let body = { isServing: true, branch: 'testBranch', serviceId:'028292', email: 'test@gmail.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'};

    beforeEach(async () => { 
        id = mongoose.Types.ObjectId().toHexString();
        cookie = await global.signin();
    });

    it('has a route handler listening to PUT /api/users/profile/:id', async () => {
        const profile = await createProfile(global.signin());
        const resp = await request(app).put(`/api/users/profile/${profile.body.id}`).set('Cookie', cookie).send(body);
        expect(resp.status).not.toEqual(404);
    });

    it('should return 401 if not authenticated', async () => {
        await request(app).put(`/api/users/profile/${id}`).send(body).expect(401);
    });

    it('should return other than 401 if is logged in', async () => {
        const response = await request(app).put(`/api/users/profile/${id}`).set('Cookie', cookie).send(body);
        expect(response.status).not.toBe(401);
    });

    it('responds with empty user profile if none exists', async () => {
        const response = await request(app).get(`/api/users/profile`).set('Cookie', global.signin()).send().expect(200);
        expect(response.body.userprofile).toEqual([]);
    });

    it('should return 404 if profile does not exist', async () => {
        await request(app).put(`/api/users/profile/${id}`).set('Cookie', global.signin()).send(body).expect(404);
    });

    it('should return 400 if incorrect payload', async () => {
        await request(app).put(`/api/users/profile/${id}`).set('Cookie', global.signin()).send({}).expect(400);
    });
});
