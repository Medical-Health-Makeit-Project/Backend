import { Response, Request, NextFunction } from 'express';
import { ApiError } from '../../config/middlewares/errorHandler/ApiError.middlewares';
import { Categories } from '../service/Categories.service';
import PrismaError from '../../config/middlewares/errorHandler/PrismaErrorHandler.middleware';

export class CategoriesController {
  constructor() {}

  static async getCategories(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const categories = await Categories.getCategories();
      res.status(200).json(categories);
    } catch (error) {
      if (error instanceof PrismaError) {
        if (error.status === 404) return next(ApiError.NotFound());
        if (error.status === 400) return next(ApiError.BadRequest());
      }
      return next(ApiError.Internal('Unknown Error'));
    }
  }
}
