import request from 'supertest';
import app  from '../app';

it('should return 404 for erroneous url', async () => {
    await request(app).get('/api/does-not-exists').expect(404);
});

describe('GET /auth/strava', function(){
    it('expect redirect to strava auth', function(done){
      request(app)
        .get('/auth/strava')
        .expect(302)
        .end(function(err, res){
          if (err) return done(err);
          done()
        });
    })
});
