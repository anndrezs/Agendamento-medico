import { DoctorRepository } from "../repository/Doctor.repository";
import { CreateDoctorDTO } from "../dtos/CreateDoctorDTO";

export class DoctorService {
  static async createDoctor(data: CreateDoctorDTO) {
    const user = await DoctorRepository.findUserByName(data.userName);

    if (!user) {
      return { status: 404, data: { message: 'Usuário não encontrado' } };
    }

    if (user.role !== 'medico') {
      return { status: 400, data: { message: 'Usuário não tem papel de médico' } };
    }

    const specialty = await DoctorRepository.findSpecialtyByName(data.specialtyName);

    if (!specialty) {
      return { status: 404, data: { message: 'Especialidade não encontrada' } };
    }

    const newDoctor = await DoctorRepository.createDoctor({
      user: user._id,
      specialty: specialty._id,
      availableDays: data.availableDays,
      timeSlots: data.timeSlots,
      status: data.status
    });

    return { status: 201, data: newDoctor };
  }
  static async getAllDoctor(){
    const doctors =  await DoctorRepository.findAllDoctor();
    return {status: 200, data: doctors}
  }
  static async getDoctorByName(userName: string){
    const doctorByName = await DoctorRepository.findUserByName(userName);
    return {status: 200, data: doctorByName}
  }
}
