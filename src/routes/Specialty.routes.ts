import { Router } from "express";
import {createSpecialty, getAllSpecialty, getSpecialtyByName} from "../controllers/Specialty.controller";

const router = Router();

router.post('/', createSpecialty);
router.get('/', getAllSpecialty);
router.get('/:name', getSpecialtyByName);

export default router;