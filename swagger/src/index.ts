import { app } from './app';

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY is not defined');
    }

    app.listen(3000, () => {
        console.log('SWAGGER DOCS running on port 3000');
    });
};

start();
