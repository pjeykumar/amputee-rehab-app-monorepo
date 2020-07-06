import { errorHandler, NotFoundError } from '@amp-rehab-app/common';

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { indexProfileRouter } from './routes';
import { updateProfileRouter } from './routes/update';

const app = express();
app.set('trust proxy', true);

app.use(cors());

app.use(json());
app.use(cookieSession({ signed: false, secure: process.env.NODE_ENV !== 'test' }));

app.use(indexProfileRouter);
app.use(updateProfileRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
