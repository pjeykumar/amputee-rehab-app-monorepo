import request from 'supertest';
import { app } from '../../app';

describe('index route handler', () => {
    it('should redirect to swagger docs if page loads up', async () => {
        const response = await request(app).get('/api/swagger/docs').send();
        expect(response.status).toBe(301);
    });

    it('responds 404 if wrong url entered', async () => {
        await request(app).get(`/api/swagger/doc`).send().expect(404);
    });

});