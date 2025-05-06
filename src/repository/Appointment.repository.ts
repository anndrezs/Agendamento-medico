import Appointment from "../models/Appointment";
import Doctor from "../models/Doctor";
import Patient from "../models/Patient";

export class AppointmentRepository{
    static findPatientByName(patientName: string){
        return Patient.findOne({name: patientName});
    }
    static findDoctorByName(doctorname: string){
        return Doctor.findOne({name: doctorname});
    }
    static createAppointment(data: any){
        const appointment = new Appointment(data);
        return appointment.save();
    }
    static findAllAppointment(){
        return Appointment.find();
    }
}