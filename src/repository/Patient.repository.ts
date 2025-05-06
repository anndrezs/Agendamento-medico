import Patient from '../models/Patient';
import User from '../models/User';

export class PatientRepository {
  static findUserByName(userName: string) {
    return User.findOne({ name: userName });
  }

  static createPatient(data: any) {
    const patient = new Patient(data);
    return patient.save();
  }

  static findAllPatient(){
    return Patient.find().populate('user', 'name email role');
  }
}
