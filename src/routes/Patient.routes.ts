import { Router } from "express";
import {cretePatient, getPatient} from "../controllers/Patient.controller";

const router = Router();

router.post('/', cretePatient);
router.get('/', getPatient);

export default router;