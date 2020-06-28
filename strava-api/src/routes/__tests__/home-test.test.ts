import request from 'supertest';
import { app } from '../../app';

describe('home page handler', () => {
    it('should have a handler listing for GET requests', async () => {
        const response = await request(app).get('/').send();
        expect(response.status).not.toBe(404);
    });
});