import { Router } from "express";
import {createUser, getAllUser, getUserById} from "../controllers/User.controller";

const router = Router();

router.post('/', createUser);
router.get('/', getAllUser);
router.get('/:id', getUserById);

export default router;