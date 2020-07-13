import request from 'supertest';
import { app } from '../../app';
import { Profile } from '../../models/profile';

describe('New profile route handler', () => {
    it('has a route handler listening to POST /api/users/profile', async () => {
        const resp = await request(app).post('/api/users/profile').set('Cookie', global.signin()).send({ isMilitary: true, branch: 'testBranch', serviceId:'028292', email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'});
        expect(resp.status).not.toEqual(404);
    })

    it('returns 400 when inputs are missing', async () => {
        await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send({
                isMilitary: true, email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123'
            })
            .expect(400);
    });

    it('returns 400 when military is true and serviceId not specified', async () => {
        await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send({
                isMilitary: true, branch:'test branch', email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123'
            })
            .expect(400);
    });

    it('returns 400 when military is true and branch is not specified', async () => {
        await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send({
                isMilitary: true, serviceId:'028292', email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123'
            })
            .expect(400);
    });

    it('returns 201 when is military true', async () => {
        await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send({
                isMilitary: true, branch: 'testBranch', serviceId:'028292', email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123'
            })
            .expect(201);
    });

    it('returns 201 when is military false where branch and service id not specified', async () => {
        await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send({
                isMilitary: false, email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123'
            })
            .expect(201);
    });

    it('returns 400 when no required fields inputted', async () => {
        await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send({
                profilePic: 'test.png', bio: 'test bio'
            })
            .expect(400);
    });

    it('returns 400 when no request body payload', async () => {
        await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send({})
            .expect(400);
    });

    it('returns 201 with base64 profile pic string', async () => {
        let img_data = 'thisisatestimageUrl';
        let buff = Buffer.from(img_data);
        let base64profilePic = buff.toString('base64');
        await request(app)
            .post('/api/users/profile')
            .set("Cookie", global.signin())
            .send({isMilitary: true, branch: 'testBranch', serviceId:'028292', email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic:base64profilePic})
            .expect(201)
    });

    it('returns 409 with attempt to create multiple profiles', async () => {
        await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send({
                isMilitary: false, email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123'
            })
            .expect(201);

        return request(app)
            .post('/api/users/profile')
            .send({isMilitary: false, email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123'})
            .expect(409);
    });

    it('returns 201 if correct payload', async () => {
        const profile = await Profile.find({});
        expect(profile.length).toBe(0);

        const profile_attrs = { isMilitary: true, branch: 'testBranch', serviceId:'028292', email: 'test@test.com', fullName:'Amputee Test', displayName: 'ampTest123', profilePic: 'test.png', bio:'Test bio'};

        const serviceId = '028292';
        const response = await request(app)
            .post('/api/users/profile')
            .set('Cookie', global.signin())
            .send(profile_attrs)
            .expect(201);

        const newProfile = await Profile.findById(response.body.id);
        expect(newProfile!.serviceId).toBe(serviceId);
    });
});
