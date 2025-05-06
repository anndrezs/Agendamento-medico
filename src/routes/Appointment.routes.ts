import { Router } from "express";
import {createAppointment, getAllAppointments} from "../controllers/Appointment.controller"

const router = Router();

router.post('/', createAppointment);
router.get('/', getAllAppointments);

export default router;