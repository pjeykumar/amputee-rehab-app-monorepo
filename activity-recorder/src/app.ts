import { errorHandler, NotFoundError } from '@amp-rehab-app/common';

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { newActivityRouter } from './routes/new';
import { indexActivityRouter } from './routes';
import { updateActivityRouter } from './routes/update';

const app = express();
app.set('trust proxy', true);

app.use(cors());

app.use(json());
app.use(cookieSession({ signed: false, secure: process.env.NODE_ENV !== 'test' }));

app.use(indexActivityRouter);
app.use(newActivityRouter);
app.use(updateActivityRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
