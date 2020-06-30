import request from 'supertest';
import moment from 'moment';
import { app } from '../../app';
import { User } from '../../models/user';

it('returns a 400 on invalid email', async () => {
  return request(app)
    .post('/api/users/auth/confirm')
    .send({
      email: 'test@',
      code: '123456',
    })
    .expect(400);
});

it('returns a 400 on invalid code', async () => {
  await request(app)
    .post('/api/users/auth/confirm')
    .send({
      email: 'test@',
      code: '1234567',
    })
    .expect(400);

  await request(app)
    .post('/api/users/auth/confirm')
    .send({
      email: 'test@',
      code: '12345t',
    })
    .expect(400);

  return request(app)
    .post('/api/users/auth/confirm')
    .send({
      email: 'test@test.com',
      code: '12345',
    })
    .expect(400);
});

it('returns a 400 on missing email and code', async () => {
  return request(app).post('/api/users/auth/confirm').send({}).expect(400);
});

it('returns a 400 if code is not active for that user', async () => {
  const email = 'test@test.com';
  const code = '123456';
  const user = User.build({ email, password: '', code, codeExpires: moment().subtract(15, 'minutes').toDate() });
  await user.save();

  return request(app)
    .post('/api/users/auth/confirm')
    .send({
      email,
      code,
    })
    .expect(400);
});

it('sets a cookie after successful sign up', async () => {
  const email = 'test2@test.com';
  const code = '111111';
  const user = User.build({ email, password: '', code, codeExpires: moment().add(15, 'minutes').toDate() });
  await user.save();

  const response = await request(app)
    .post('/api/users/auth/confirm')
    .send({
      email,
      code,
    })
    .expect(200);

  expect(response.get('Set-Cookie')).toBeDefined();
});
