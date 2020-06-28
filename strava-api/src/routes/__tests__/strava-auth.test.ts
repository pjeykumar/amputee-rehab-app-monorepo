import request from 'supertest';
import { app } from '../../app';

describe('redirect to strava auth page', function(){
    it('return 302', function(done){
      request(app).get('/strava/auth').expect(302, done);
    });
});