import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { Profile } from '../../models/profile';

const createProfile = async (cookie: string[]) => {
    return request(app).post('/api/users/profile').set('Cookie', cookie).send({ isMilitary: true, branch: 'testBranch', serviceId:'028292', email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'});
}

describe('Update profile route handler', () => {
    let id: string;
    let cookie: string[];
    let body = { isMilitary: true, branch: 'testBranch', serviceId:'028292', email: 'test@test.com', fullName:'Updated name', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'};

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

    it('should return 400 if incorrect payload', async () => {
        await request(app).put(`/api/users/profile/${id}`).set('Cookie', global.signin()).send({}).expect(400);
    });

    it('should return 400 if isMilitary true and missing inputs', async () => {
        const cookie = await global.signin();
        const res = await createProfile(cookie);
        expect(await Profile.find({}));
        await request(app).put(`/api/users/profile/${res.body.id}`)
        .set('Cookie', cookie)
        .send({isMilitary: true, email: 'test@test.com', fullName:'Updated name', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'})
        .expect(400);
    });

    it('should return 404 when profile not found', async() => {
        const cookie = await global.signin();
        await createProfile(cookie);
        expect(await Profile.find({}));

        await request(app).put(`/api/users/profile/${id}`).set('Cookie', cookie).send(body).expect(404);
    });

    it('should return 202 when user profile successfully updated', async() => {
        const cookie = await global.signin();
        const res = await createProfile(cookie);
        expect(await Profile.find({}));

        const response = await request(app).put(`/api/users/profile/${res.body.id}`)
        .set('Cookie', cookie)
        .send(body)
        .expect(202);

        expect(response.body.fullName).toBe('Updated name')
    });
});
