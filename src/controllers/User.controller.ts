import { Request, Response } from "express";
import { UserService } from "../services/User.service";

export const createUser = async (req: Request, res: Response) => {
    const result = await UserService.createUser(req.body);
    res.status(result.status).json(result.data);
};

export const getAllUser =  async (req: Request, res: Response) => {
    const result = await UserService.getAllUsers();
    res.status(result.status).json(result.data);
};

export const getUserById = async (req: Request, res: Response) => {
    const {id} = req.params;
    const result = await UserService.getUserById(id);
    res.status(result.status).json(result.data);

}