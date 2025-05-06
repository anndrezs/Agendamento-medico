import { Request, Response } from "express";
import { PatientService } from "../services/Patient.service";

export const cretePatient = async (req: Request, res: Response) => {
    const result = await PatientService.createPatient(req.body);
    res.status(result.status).json(result.data);
    
};

export const getPatient = async (req: Request, res: Response) => {
    const result = await PatientService.getAllPatient();
    res.status(result.status).json(result.data);
};