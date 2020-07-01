import request from 'supertest';
import { app } from '../../app';
import { Activity } from '../../models/activity';

const createExercise = (cookie: string[]) => {
    return request(app).post('/api/activity').set('Cookie', cookie).send({ exercise: 'run', duration: 10, distance: 10, description:'test exercise', difficulty:5, photos:['test.png'], privacy:'private' });
};

describe('index route handler', () => {
    it('should have a handler listing for GET requests', async () => {
        const response = await request(app).get('/api/activity').send();
        expect(response.status).not.toBe(404);
    });

    it('should return 401 if the user is not logged in', async () => {
        await request(app).get('/api/activity').send().expect(401);
    });

    it("should only return logged in user's activities", async () => {
        const cookie1 = global.signin();
        await createExercise(cookie1);
        await createExercise(cookie1);

        const cookie2 = global.signin();
        await createExercise(cookie2);

        expect(await Activity.find({})).toHaveLength(3);

        const response = await request(app).get('/api/activity').set('Cookie', cookie1).send().expect(200);
        expect(response.body).toHaveLength(2);
    });
});