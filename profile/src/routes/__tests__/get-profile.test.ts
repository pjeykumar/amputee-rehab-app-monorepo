import request from 'supertest';
import { app } from '../../app';
import { Profile } from '../../models/profile';

const createProfile = async (cookie: string[]) => {
    return request(app).post('/api/users/profile').set('Cookie', cookie).send({ isMilitary: true, branch: 'testBranch', serviceId:'028292', email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'});
}

describe('index route handler', () => {
    it('should have a handler listing for GET requests', async () => {
        const response = await request(app).get('/api/users/profile').send();
        expect(response.status).not.toBe(404);
    });

    it('should return 401 if the user is not logged in', async () => {
        await request(app).get('/api/users/profile').send().expect(401);
    });

    it('responds with empty user profile if none exists', async () => {
        const response = await request(app).get(`/api/users/profile`).set('Cookie', global.signin()).send();
        expect(response.body.userprofile).toEqual(undefined);
    });

    it('responds 404 if profile does not exist', async () => {
        await request(app).get(`/api/users/profile`).set('Cookie', global.signin()).send().expect(404);
    });

    it("should only return logged in user's profile", async () => {
        const cookie = await global.signin();
        await createProfile(cookie);
        expect(await Profile.find({}));

        const response = await request(app).get('/api/users/profile').set('Cookie', cookie).send().expect(200);
        expect(response.body.email).toBe('test@test.com')
    });
});
