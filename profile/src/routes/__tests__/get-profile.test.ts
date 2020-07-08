import request from 'supertest';
import { app } from '../../app';
import { Profile } from '../../models/profile';

const createProfile = async (cookie: string[]) => {
    return request(app).post('/api/users/profile').set('Cookie', cookie).send({ isServing: true, branch: 'testBranch', serviceId:'028292', email: 'test@gmail.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'});
}

describe('index route handler', () => {
    it('should have a handler listing for GET requests', async () => {
        const response = await request(app).get('/api/users/profile').send();
        expect(response.status).not.toBe(404);
    });

    it('should return 401 if the user is not logged in', async () => {
        await request(app).get('/api/users/profile').send().expect(401);
    });

    it("should only return logged in user's profile", async () => {
        const cookie = await global.signin();
        await createProfile(cookie);
        expect(await Profile.find({}));

        const response = await request(app).get('/api/users/profile').set('Cookie', cookie).send().expect(200);
        expect(response.body.userprofile[0].email).toEqual('test@gmail.com');
    });
});
