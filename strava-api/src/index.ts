import { errorHandler} from '@amp-rehab-app/common';
import app from './app';

app.use(errorHandler);
const start = async () => {
    app.listen(5000, () => {
        console.log('Strava api running on port 5000');
    });
};

start();
