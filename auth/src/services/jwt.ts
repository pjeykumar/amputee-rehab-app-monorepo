import jwt from 'jsonwebtoken';

export const createUserJWT = (id: string, email: string): string => jwt.sign({ id, email }, process.env.JWT_KEY!);
