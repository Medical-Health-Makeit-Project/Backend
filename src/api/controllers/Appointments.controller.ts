import { Request, Response, NextFunction } from 'express';
import { Appointments } from '../service/Appointments.service';

export class AppointmentsController {
  constructor() {}

  static async appointments(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, role } = req.user;
      const appointemnts = await Appointments.getAppointments(id, role);
      res.status(200).json(appointemnts);
    } catch (error) {}
  }
}
