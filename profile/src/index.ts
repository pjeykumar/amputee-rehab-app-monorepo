import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
    if (!process.env.KWT_KEY) {
        throw new Error('JWT_KEY is not defined');
    }

    try {
        await mongoose.connect('mongodb://profile-srv:27017/profile', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connected to Mongo');
    } catch (error) {
        console.error(error);
    }

    app.listen(3000, () => {
        console.log('PROFILE SERVICE running on port 3000');
    });
};

start();
