import express, { Request, Response } from 'express';
import { currentUser, validateRequest } from '@amp-rehab-app/common';
import { body } from 'express-validator';
import { Profile } from '../models/profile';
import path from "path";
import multer from 'multer';
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve(__dirname, "profile-images/"));
  },
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return cb(err, '');

      cb(null, raw.toString("hex") + path.extname(file.originalname));
    });
  },
});

const upload = multer({ storage });
const router = express.Router();


router.post(
    '/api/users/profile',
    [
        body('isMilitary').isBoolean().withMessage('You need to select whether you have served or are currently serving.'),
        body('profilePic').optional(),
        body('bio').optional(),
        body('email').not().isEmpty().withMessage('You need to provide your email'),
        body('fullName').not().isEmpty().withMessage('You need to provide your full name'),
        body('displayName').not().isEmpty().withMessage('You need to provide your display name'),
    ],
        // Finds the validation errors in this request and wraps them in an object with handy functions
        
    upload.any(),
    currentUser,
    validateRequest,
    async (req: Request, res: Response) => {
        const { isMilitary, branch, serviceId, email, fullName, displayName, bio } = req.body;
        const profilePic = req.file ? req.file.buffer.toString('base64') : '';

        const existingProfile = await Profile.find({ email: email})

        if(existingProfile){
            res.status(409);
        }

        if(req.body.isMilitary){
            if(!req.body.branch && !req.body.serviceId){
                res.status(400);
            }

            if(!req.body.branch || !req.body.serviceId){
                res.status(400);
            }
        }

        const profile = await Profile.build({ userId: req.currentUser!.id, isMilitary, branch, serviceId, email, fullName, displayName, profilePic, bio });

        await profile.save();

        res.status(201).send(profile);
    },
);

export { router as newProfileRouter };