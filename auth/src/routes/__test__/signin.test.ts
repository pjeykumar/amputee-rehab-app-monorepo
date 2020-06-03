import request from 'supertest';
import { app } from '../../app';

it('fails when a email that does not exist is supplied', async () => {
    await request(app).post('/api/users/signin').send({ email: 'test@test.com', password: 'password' }).expect(400);
});

it('returns 400 when incorrect an password is supplied', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password',
        })
        .expect(201);

    return request(app).post('/api/users/signin').send({ email: 'test@test.com', password: 'pwd' }).expect(400);
});

it('returns a 200 on successful signin', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password',
        })
        .expect(201);

    const response = await request(app)
        .post('/api/users/signin')
        .send({ email: 'test@test.com', password: 'password' })
        .expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();
});
