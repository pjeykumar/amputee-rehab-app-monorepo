import request from 'supertest';
import { app } from '../../app';

describe('redirect to account page about strava auth', function(){
    it('return 302', function(done){
      request(app).get('/strava/auth/callback').expect(302, done);
    });
});