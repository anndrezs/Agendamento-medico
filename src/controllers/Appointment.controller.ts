import { Request, Response } from "express";
import { AppointmentService } from "../services/Appointment.service";

export const createAppointment = async (req: Request, res: Response) => {
    const result = await AppointmentService.createAppointment(req.body);
    res.status(result.status).json(result.data);
};

export const getAllAppointments = async (req: Request, res: Response) => {
    const result = await AppointmentService.getAllAppointment();
    res.status(result.status).json(result.data);
  };