import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../../config/middlewares/errorHandler/ApiError.middlewares';
import registerSchema from '../schemas/register.schema';

const registerValidator = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = registerSchema.validate(req.body);
  if (error) return next(ApiError.BadRequest());
  const { birthdate } = req.body;
  req.body = {
    ...req.body,
    birthdate: new Date(birthdate),
  };
  next();
};

export default registerValidator;