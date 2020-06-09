import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import { Password } from '../services/password';
import { User } from '../models/user';
import { validateRequest, BadRequestError } from '@amp-rehab-app/common';
import { createUserJWT } from '../services/jwt';

const router = express.Router();

router.post(
    '/api/users/signin',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').trim().notEmpty().withMessage('You must supply a password'),
        validateRequest,
    ],
    async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
            throw new BadRequestError('User or password incorrect');
        }

        const passwordsMatch = await Password.compare(existingUser.password, password);

        if (!passwordsMatch) {
            throw new BadRequestError('User or password incorrect');
        }
        // Generate JWT
        const userJwt = createUserJWT(existingUser.id, existingUser.email);

        // Store on the session object
        req.session = {
            jwt: userJwt,
        };

        res.status(200).send(existingUser);
    },
);

export { router as signinRouter };
