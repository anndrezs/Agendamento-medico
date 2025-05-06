import { CreateAppointmentDTO } from "../dtos/CreateAppointmentDTO";
import { AppointmentRepository } from "../repository/Appointment.repository";

export class AppointmentService{
    static async createAppointment(data: CreateAppointmentDTO){
        const patient = await AppointmentRepository.findPatientByName(data.patientName);
        if (!patient){
            return {status: 404, data: {message: 'Paciente não encontrado'}};
        }
        const doctor = await AppointmentRepository.findDoctorByName(data.doctorName);
        if(!doctor){
            return {status: 404, data: {message: 'Médico não encontrado'}};
        }
        const newAppointment = await AppointmentRepository.createAppointment({
            patient: patient._id,
            doctor: doctor._id,
            date: data.date,
            status: data.status,
            note: data.note,
            createdAt: data.createdAt
        });
        return { status: 201, data: newAppointment };
    }
    static async getAllAppointment(){
        const appointments = await AppointmentRepository.findAllAppointment();
        return {status: 200, data: appointments};
    }
}