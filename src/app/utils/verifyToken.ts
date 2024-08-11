import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import AppError from '../errors/AppError';
import config from '../config';

const verifyToken = (token: string) => {
  let decoded;
  try {
    decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;
  } catch (error) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
  }
  return decoded;
};

export default verifyToken;
