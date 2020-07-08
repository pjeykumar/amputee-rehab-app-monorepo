import request from 'supertest';
import { app } from '../../app';
import { Profile } from '../../models/profile';

const createProfile = async (cookie: string[]) => {
    return request(app).post('/api/users/profile').set('Cookie', cookie).send({ isServing: true, branch: 'testBranch', serviceId:'028292', email: 'test@gmail.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'});
}

describe('New profile route handler', () => {
    it('has a route handler listening to POST /api/users/profile', async () => {
        const cookie = global.signin();
        const resp = await createProfile(cookie);
        expect(resp.status).not.toEqual(404);
    })

    it('returns 400 when inputs are missing', async () => {
        await request(app)
            .post('/api/users/profile')
            .send({
                isServing: true, email: 'test@gmail.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'
            })
            .expect(400);
    });

    it('returns 201 if correct payload', async () => {
        const profile = await Profile.find({});
        expect(profile.length).toBe(0);

        const profile_attrs = { isServing: true, branch: 'testBranch', serviceId:'028292', email: 'test@gmail.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'};

        const serviceId = '028292';
        const response = await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send(profile_attrs)
            .expect(201);

        const newProfile = await Profile.findById(response.body.id);
        expect(newProfile!.serviceId).toBe(serviceId);
    });
});
