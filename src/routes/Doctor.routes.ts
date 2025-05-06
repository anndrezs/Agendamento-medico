import { Router } from "express";
import {createDoctor, getDoctor} from "../controllers/Doctor.controller";

const router = Router();

router.post('/', createDoctor);
router.get('/', getDoctor);

export default router;