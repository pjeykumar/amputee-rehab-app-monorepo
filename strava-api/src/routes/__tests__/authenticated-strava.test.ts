import request from 'supertest';
import { app } from '../../app';

describe('account page after strava auth', function(){
    it('authenticated account or activities page to GET /account', async () => {
            const resp = await request(app).get('/account').send();
            expect(resp.status).not.toEqual(404);
    });

    it('redirect to home when not authenticated /account', async () => {
        await request(app).get('/account').send().expect(302);
    });
});