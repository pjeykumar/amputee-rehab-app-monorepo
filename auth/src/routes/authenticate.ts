import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { randomBytes } from 'crypto';
import { validateRequest } from '@amp-rehab-app/common';
import moment from 'moment';

import { sendEmail } from '../services/send-email';
import { User } from '../models/user';

const router = express.Router();

router.post(
  '/api/users/auth',
  [body('email').isEmail().withMessage('Email must be valid')],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email } = req.body;
    const code = randomBytes(3).toString('hex');
    await sendEmail(code);

    const user = User.build({ email, password: '', code, codeExpires: moment().add(15, 'minutes').toDate() });
    await user.save();

    res.send(202);
  },
);

export { router as authenticateRouter };
