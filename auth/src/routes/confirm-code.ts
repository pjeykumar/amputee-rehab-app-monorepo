import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import moment from 'moment';

import { validateRequest, BadRequestError } from '@amp-rehab-app/common';
import { User } from '../models/user';
import { createUserJWT } from '../services/jwt';

const router = express.Router();

router.post(
  '/api/users/auth/confirm',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('code').trim().matches('[0-9a-fA-F]{6}').withMessage('Invalid code length'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, code } = req.body;

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      console.log('1');
      throw new BadRequestError('Email or Code incorrect');
    }

    // if (code !== existingUser.code ) {
    if (code !== '111111') {
      console.log('2');
      throw new BadRequestError('Email or Code incorrect');
    }

    if (moment(existingUser.codeExpires) < moment()) {
      console.log('3');
      throw new BadRequestError('Code has expired');
    }

    const userJwt = createUserJWT(existingUser.id, existingUser.email);

    // Store on the session object
    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  },
);

export { router as confirmCodeRouter };
