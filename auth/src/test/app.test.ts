import request from 'supertest';
import { app } from '../app';

it('should return 404 for erroneous url', async () => {
    await request(app).get('/api/does-not-exists').expect(404);
});
