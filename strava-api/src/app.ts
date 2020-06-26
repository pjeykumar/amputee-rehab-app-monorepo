import express from 'express';
import passport from "passport";
import lusca from "lusca";
import flash from "express-flash";
import session from 'express-session';
import bodyParser from "body-parser";
import cookieParser  from 'cookie-parser';
import { router } from './config/passport';
import { isAuthenticated } from './util/user_authenticated';
import {Request, Response} from "express";


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'XYZ123',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(router);

app.get('/', (req: Request, res: Response) =>{
    res.send("Hello world");
});

app.get('/account', isAuthenticated, (req: Request, res: Response) =>{
  console.log(req.user);
  res.send("ONLY STRAVA ACCESS ALLOWED!");
});

export default app;
