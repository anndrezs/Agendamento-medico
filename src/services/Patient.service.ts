import { CreatePatientDTO } from '../dtos/CreatePatientDTO';
import { PatientRepository } from '../repository/Patient.repository';

export class PatientService {
  static async createPatient(data: CreatePatientDTO) {
    const user = await PatientRepository.findUserByName(data.userName);

    if (!user) {
      return { status: 404, data: { message: 'Usuário não encontrado' } };
    }
    

    if (user.role !== 'paciente') {
      return { status: 400, data: { message: 'Usuário não tem papel de paciente' } };
    }

    const newPatient = await PatientRepository.createPatient({
      user: user._id,
      birthdate: data.birthdate,
      gender: data.gender,
      medNotes: data.medNotes
    });

    return { status: 201, data: newPatient };
  }

  static async getAllPatient(){
    const patients = await PatientRepository.findAllPatient();
    return {status: 200, data: patients};
  }
}
