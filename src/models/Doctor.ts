import mongoose, {Document, mongo, Schema} from "mongoose";

export type StatusDoctor = 'ativo' | 'inativo';
export interface IDoctor extends Document{
    user: mongoose.Types.ObjectId;
    specialty: mongoose.Types.ObjectId;
    availableDays: string[];
    timeSlots: string[];
    status: StatusDoctor;

}

const DoctorSchema = new Schema<IDoctor>({
    user: {type: Schema.Types.ObjectId, ref:'User', required: true},
    specialty: {type: Schema.Types.ObjectId, ref:'Specialty', required: true },
    availableDays: {type: [String], required: true, enum: ["segunda", "quarta", "sexta"]},
    timeSlots: {type: [String], required: true},
    status: {type: String, enum: ['ativo', 'inativo'], default: 'ativo'}
});

export default mongoose.model<IDoctor>('Doctor', DoctorSchema);

