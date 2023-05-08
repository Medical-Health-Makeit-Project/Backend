import Joi from 'joi';

const appointment = Joi.array().items(
  Joi.object({
    id: Joi.string().uuid().required(),
    patientData: Joi.object({
      patientName: Joi.string().required(),
      patientLastname: Joi.string().required(),
      patientId: Joi.string().allow(null),
      patientEmail: Joi.string().email().required(),
      patientPhone: Joi.string().required(),
      isAdult: Joi.boolean().required(),
      patientGender: Joi.string().required(),
      patientBirth: Joi.string().required(),
    }),
    appointmentData: Joi.object({
      specialitySelected: Joi.object({
        id: Joi.string().required(),
        specialityName: Joi.string().required(),
      }).required(),
      preferredDoctorSelected: Joi.object({
        id: Joi.string().required(),
        doctorName: Joi.string().required(),
      }).required(),
      countrySelected: Joi.string().required(),
      citySelected: Joi.string().required(),
      appointmentDate: Joi.string().required(),
      appointmentTime: Joi.string().required(),
      consultationReasons: Joi.string().required(),
      appointmentPrice: Joi.number().required(),
    }),
  })
);

export default appointment;
