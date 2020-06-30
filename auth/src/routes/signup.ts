import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import { User } from '../models/user';
import { validateRequest, BadRequestError } from '@amp-rehab-app/common';
import { createUserJWT } from '../services/jwt';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 chars'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email already in use');
    }

    const user = User.build({ email, password, code: '', codeExpires: new Date() });
    await user.save();

    // Generate JWT
    const userJwt = createUserJWT(user.id, user.email);

    // Store on the session object
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  },
);

export { router as signupRouter };
