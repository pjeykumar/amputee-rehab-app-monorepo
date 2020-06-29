import { errorHandler, NotFoundError } from '@amp-rehab-app/common';

import express from 'express';
import passport from "passport";
import lusca from "lusca";
import flash from "express-flash";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import {Request, Response, NextFunction} from "express";

import { stravaAuthRouter } from "./routes/strava-auth";
import { stravaCallbackRouter } from "./routes/strava-callback";
import { homeRouter } from "./routes/home-test";
import { authenticatedStravaRouter } from "./routes/authenticated-strava";


const app = express();
app.set('trust proxy', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(session({secret: 'test', saveUninitialized: true, resave: true})); 
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(function(req: Request, res: Response, next:NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(stravaAuthRouter);
app.use(stravaCallbackRouter);
app.use(homeRouter);
app.use(authenticatedStravaRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };