import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface Global {
            signin(): string[];
        }
    }
}

let mongo: MongoMemoryServer;
beforeAll(async () => {
    process.env.JWT_KEY = 'TEST_KEY';

    mongo = new MongoMemoryServer();
    const mongoUri = await mongo.getUri();
    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();
    for (const collection of collections) {
        await collection.deleteMany({});
    }
});

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});

global.signin = () => {
    // build JWT payload. {id, email}
    const payload = {
        id: new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com',
    };

    // create JWT
    const token = jwt.sign(payload, process.env.JWT_KEY!);

    // Build session object {jwt: jwt}
    const session = { jwt: token };

    // Turn session into JSON
    const sessionJSON = JSON.stringify(session);

    // Convert JSON into base64
    const base64 = Buffer.from(sessionJSON).toString('base64');

    // return a string that sets the cookie
    return [`express:sess=${base64}`];
};
