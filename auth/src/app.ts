import { NotFoundError, errorHandler } from '@amp-rehab-app/common';

import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';
import { authenticateRouter } from './routes/authenticate';
import { confirmCodeRouter } from './routes/confirm-code';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';

const app = express();
// app.set('trust proxy', true);

app.use(cors());

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  }),
);

app.use(currentUserRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(signinRouter);

app.use(authenticateRouter);
app.use(confirmCodeRouter);

app.all('*', async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
