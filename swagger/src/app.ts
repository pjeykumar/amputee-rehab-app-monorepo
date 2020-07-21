import { NotFoundError } from '@amp-rehab-app/common';

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { swaggerRouter } from './routes/swagger-route';

const app = express();
app.set('trust proxy', true);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(json());
app.use(cookieSession({ signed: false, secure: process.env.NODE_ENV !== 'test' }));

app.use(swaggerRouter);

app.all('*', () => {
  throw new NotFoundError();
});

export { app };
