import { Request, Response } from 'express';
import { DoctorService } from '../services/Doctor.service';

export const createDoctor = async (req: Request, res: Response) => {
  const result = await DoctorService.createDoctor(req.body);
  res.status(result.status).json(result.data);
};

export const getDoctor = async (req: Request, res: Response) => {
    const result = await DoctorService.getAllDoctor();
    res.status(result.status).json(result.data);
};

export const getDoctorByName = async (req: Request, res: Response)=>{
    const {userName}= req.params
    const result = await DoctorService.getDoctorByName(userName);
    res.status(result.status).json(result.data);

}
