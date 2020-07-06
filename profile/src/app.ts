import { errorHandler, NotFoundError } from '@amp-rehab-app/common';

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

const app = express();
app.set('trust proxy', true);

app.use(cors());

app.use(json());
app.use(cookieSession({ signed: false, secure: process.env.NODE_ENV !== 'test' }));

//routes go here

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
