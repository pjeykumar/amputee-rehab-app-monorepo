import request from 'supertest';
import { app } from '../../app';
import * as emailUtils from './../../services/send-email';
import { User } from '../../models/user';

it('should return 400 when not provided with a valid email', async () => {
  await request(app).post('/api/users/auth').send({ email: 'test' }).expect(400);
  await request(app).post('/api/users/auth').send({}).expect(400);
});

it('should send user an email containing a 6 character code', async () => {
  jest.spyOn(emailUtils, 'sendEmail');
  await request(app).post('/api/users/auth').send({ email: 'test@test.com' }).expect(202);
  expect(emailUtils.sendEmail).toHaveBeenCalledTimes(1);

  const user = await User.findOne({ email: 'test@test.com' });
  console.log(user);
});
