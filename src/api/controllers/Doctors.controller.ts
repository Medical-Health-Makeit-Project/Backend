import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../../config/middlewares/errorHandler/ApiError.middlewares';
import { Doctors } from '../service/Doctors.service';
import { IAllDoctors } from '../interfaces/AllDoctors.interface';
import { IAllAreas } from '../interfaces/AllAreas.interface';
import PrismaError from '../../config/middlewares/errorHandler/PrismaErrorHandler.middleware';

export class DoctorsController {
  constructor() {}

  static async getAllDoctors(req: Request, res: Response, next: NextFunction) {
    try {
      const doctors: IAllDoctors[] = await Doctors.getAllDoctor();
      res.status(200).json(doctors);
    } catch (error) {
      if (error instanceof PrismaError) {
        if (error.status === 404) return next(ApiError.NotFound());
        if (error.status === 400) return next(ApiError.Forbbiden());
      }
      return next(ApiError.Internal('Unknown Error'));
    }
  }

  static async updateDoctors(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id, role } = req.user;
      if (!id || !role) return next(ApiError.BadRequest());
      await Doctors.updateDoctor(req.body);
      res.status(200).json('UPDATED');
    } catch (error) {
      if (error instanceof PrismaError) {
        if (error.status === 404) return next(ApiError.NotFound());
        if (error.status === 400) return next(ApiError.Forbbiden());
      }
      return next(ApiError.Internal('Unknown Error'));
    }
  }

  static async updateDoctorByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id, role } = req.user;
      if (!id || !role) return next(ApiError.BadRequest());
      await Doctors.updateDoctorByUser(id, req.body);
      res.status(200).json('UPDATED');
    } catch (error) {
      if (error instanceof PrismaError) {
        if (error.status === 404) return next(ApiError.NotFound());
        if (error.status === 400) return next(ApiError.Forbbiden());
      }
      return next(ApiError.Internal('Unknown Error'));
    }
  }

  static async deleteDoctors(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.user;
      const { id: idDoctor } = req.body;
      if (!id || !idDoctor) return next(ApiError.BadRequest());
      await Doctors.deleteDoctor(idDoctor);
      res.status(200).json('DELETED');
    } catch (error) {
      if (error instanceof PrismaError) {
        if (error.status === 404) return next(ApiError.NotFound());
        if (error.status === 400) return next(ApiError.Forbbiden());
      }
      return next(ApiError.Internal('Unknown Error'));
    }
  }

  static async getDoctorsAreas(req: Request, res: Response, next: NextFunction) {
    try {
      const areas: IAllAreas[] = await Doctors.getAreas();
      res.status(200).json(areas);
    } catch (error) {
      if (error instanceof PrismaError) {
        if (error.status === 404) return next(ApiError.NotFound());
        if (error.status === 400) return next(ApiError.Forbbiden());
      }
      return next(ApiError.Internal('Unknown Error'));
    }
  }
}
