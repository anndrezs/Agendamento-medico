import { CreateSpecialtyDTO } from "../dtos/CreateSpecialtyDTO";
import Specialty from "../models/Specialty";

export class specialtyRepository{
    static async createSpecialty(data: CreateSpecialtyDTO){
        const specialty = new Specialty(data);
        return specialty.save();
    }
    static async findAllSpecialty(){
        return Specialty.find();
    }
    static async findSpecialtyByName(name: string){
        return Specialty.findOne({name});
    }
}