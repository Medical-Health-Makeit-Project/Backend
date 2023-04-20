import { Router } from 'express';
import { DoctorsController } from '../controllers/Doctors.controller';
import { PRESET_CLOUDINARY } from '../utils/constants.utils';
import { allowedRoles } from '../utils/roles.utils';
import formData from '../middlewares/formData.middlewares';
import restrictInvalidDoctorUpdate from '../middlewares/doctorUpdater.middlewares';
import authorizationValidator from '../middlewares/authorization.middlewares';

const doctorRouter = Router();

doctorRouter.get('/', DoctorsController.getAllDoctors);
doctorRouter.put(
  '/',
  authorizationValidator(allowedRoles.GENERAL),
  formData(PRESET_CLOUDINARY),
  restrictInvalidDoctorUpdate,
  DoctorsController.updateDoctors
);
doctorRouter.delete('/', authorizationValidator(allowedRoles.ADMIN), DoctorsController.deleteDoctors);

export default doctorRouter;
