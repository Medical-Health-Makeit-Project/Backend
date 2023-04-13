import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../../config/middlewares/errorHandler/ApiError.middlewares';
import loginSchema from '../schemas/login.schemas';
import { ILogin } from '../interfaces/Login.interface';
import domainChecker from '../utils/domainChecker.utils';

const loginValidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: ILogin = req.body;
  if (!email || !password) next(ApiError.BadRequest());
  const { error } = loginSchema.validate({ email, password });

  if (error) return next(ApiError.BadRequest());
  const emailDomain = domainChecker(email);
  req.body = {
    ...req.body,
    emailDomain,
  };
  next();
};

export default loginValidator;
