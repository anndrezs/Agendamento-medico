import { specialtyRepository } from "../repository/Specialty.repository";
import { CreateSpecialtyDTO } from "../dtos/CreateSpecialtyDTO";


export class specialtyService{
    static async createSpecialty(data: CreateSpecialtyDTO){
        const existingSpecialty = await specialtyRepository.findSpecialtyByName(data.name);
        if (existingSpecialty){
            return {status: 400, data: {message: 'Especialidade já registrada'}};
        }
            const newSpecialty = await specialtyRepository.createSpecialty(data);
            await newSpecialty.save();
            return {status: 201, data: newSpecialty}
        }
        static async getAllSpecialty(){
            const specialtys = await specialtyRepository.findAllSpecialty();
            return {status: 201, data: specialtys};
        }
        static async getSpecialtyByName(name: string){
            const specialtyByName = await specialtyRepository.findSpecialtyByName(name);
            return {status: 201, data: specialtyByName};
        }
}