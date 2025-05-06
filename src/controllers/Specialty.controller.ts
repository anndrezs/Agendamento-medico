import { Request, Response } from "express";
import { specialtyService } from "../services/Specialty.service";

export const createSpecialty = async (req: Request, res: Response) =>{
    const result = await specialtyService.createSpecialty(req.body);
    res.status(result.status).json(result.data);
};

export const getAllSpecialty = async (req: Request, res: Response) => {
    const result = await specialtyService.getAllSpecialty();
    res.status(result.status).json(result.data);
};

export const getSpecialtyByName = async (req: Request, res: Response) => {
    const {name} = req.params;
    const result = await specialtyService.getSpecialtyByName(name);
    res.status(result.status).json(result.data);
}