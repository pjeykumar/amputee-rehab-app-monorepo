import express, { Request, Response } from 'express';
import { currentUser, requireAuth, validateRequest, NotFoundError, NotAuthorisedError } from '@amp-rehab-app/common';
import { body } from 'express-validator';
import { Profile } from '../models/profile';
import multer from 'multer';
import path from "path";
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

const router = express.Router();
const upload = multer({ storage });

router.put(
    '/api/users/profile/:id',
    upload.any(),
    currentUser,
    requireAuth,
    [
        body('isMilitary').isBoolean().withMessage('You need to select whether you have served or are currently serving.'),
        body('profilePic').optional(),
        body('bio').optional(),
        body('email').not().isEmpty().withMessage('You need to provide your email'),
        body('fullName').not().isEmpty().withMessage('You need to provide your full name'),
        body('displayName').not().isEmpty().withMessage('You need to provide your display name'),
    ],
    upload.single('profilePic'),
    validateRequest,
    async (req: Request, res: Response) => {
        const profile = await Profile.findById(req.params.id);

        if (!profile) throw new NotFoundError();
        if (profile.userId !== req.currentUser!.id) throw new NotAuthorisedError();

        if(req.body.isMilitary){
            if(!req.body.branch && !req.body.serviceId){
                res.status(400);
            }

            if(!req.body.branch || !req.body.serviceId){
                res.status(400);
            }
        }

        profile.isMilitary = req.body.isMilitary;
        profile.branch = req.body.branch;
        profile.serviceId = req.body.serviceId;
        profile.email = req.body.email;
        profile.fullName = req.body.fullName;
        profile.displayName = req.body.displayName;
        profile.profilePic = req.file ? req.file.buffer.toString('base64') : '';
        profile.bio = req.body.bio;

        await profile.save();

        res.status(202).send(profile);
    },
);

export { router as updateProfileRouter };
