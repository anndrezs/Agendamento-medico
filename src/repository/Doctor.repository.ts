import Doctor from "../models/Doctor";
import Specialty from "../models/Specialty";
import User from "../models/User";

export class DoctorRepository{
    static findUserByName(userName: string) {
        return User.findOne({ name: userName });
      }
    
    static createDoctor(data: any){
        const doctor = new Doctor(data);
        return doctor.save();
    }
    static findSpecialtyByName(specialtyName: string){
        return Specialty.findOne({name: specialtyName})
    }
    static findAllDoctor(){
        return Doctor.find();
    }
    
}