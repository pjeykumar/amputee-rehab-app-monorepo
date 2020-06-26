import {Request, Response, NextFunction } from "express";

//helper function to see if user is logged in with strava
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
    
};

export { isAuthenticated };