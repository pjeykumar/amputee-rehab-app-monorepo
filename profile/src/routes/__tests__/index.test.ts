import request from 'supertest';
import { app } from '../../app';
import { Profile } from '../../models/profile';

const getProfile = (cookie: string[]) => {
    return request(app).get('/api/profile').set('Cookie', cookie)
};

describe('index route handler', () => {
    it('should have a handler listing for GET requests', async () => {
        const response = await request(app).get('/api/profile').send();
        expect(response.status).not.toBe(404);
    });

    it('should return 401 if the user is not logged in', async () => {
        await request(app).get('/api/profile').send().expect(401);
    });

    it("should only return logged in user's profile", async () => {
        const cookie = await global.signin();
        await getProfile(cookie);
        expect(await Profile.find({}));

        console.log(cookie);
        const response = await request(app).get('/api/profile').set('Cookie', cookie).send().expect(200);
        console.log(response);
        expect(response.body.userprofile.email).toEqual('test@test.com');
    });
});
