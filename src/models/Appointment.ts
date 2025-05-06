import mongoose, {Document, Mongoose, Schema} from "mongoose";

export type StatusAppointment = 'pendente' | 'confirmada' | 'cancelada' | 'realizada';
export interface IAppointment extends Document{
    patient: mongoose.Types.ObjectId;
    doctor: mongoose.Types.ObjectId;
    date: Date;
    status: StatusAppointment;
    note?: string;
    createdAt: Date;
     
};

const AppointmentSchema = new Schema<IAppointment>({
    patient: {type: Schema.Types.ObjectId, ref:'Patient', required: true},
    doctor: {type: Schema.Types.ObjectId, ref:'Doctor', required: true},
    date: {type: Date, required: true},
    status: {type: String, enum: ['pendente' , 'confirmada' , 'cancelada', 'realizada'], required: true },
    note: {type: String},
    createdAt: {type: Date, default: Date.now}
})
export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);