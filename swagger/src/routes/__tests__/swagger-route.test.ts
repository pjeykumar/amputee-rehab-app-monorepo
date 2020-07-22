import request from 'supertest';
import { app } from '../../app';

describe('index route handler', () => {
    it('should redirect to profile swagger docs if page loads up', async () => {
        const response = await request(app).get('/api/swagger/profile').send();
        expect(response.status).toBe(301);
    });

    it('should redirect to auth swagger docs if page loads up', async () => {
        const response = await request(app).get('/api/swagger/auth').send();
        expect(response.status).toBe(301);
    });

    it('should redirect to activity swagger docs if page loads up', async () => {
        const response = await request(app).get('/api/swagger/activity').send();
        expect(response.status).toBe(301);
    });

    it('responds 404 if wrong url entered', async () => {
        await request(app).get(`/api/swagger/doc`).send().expect(404);
    });

});