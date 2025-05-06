import mongoose, {Document, mongo, Schema} from "mongoose";

export type genderType = 'm' | 'f' | 'outro';
export interface IPatient extends Document{
    user: mongoose.Types.ObjectId;
    birthdate: Date;
    gender: genderType;
    medNotes?: string;
}

const PatientSchema = new Schema<IPatient>({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    birthdate:{type: Date, required: true},
    gender: {type: String, enum: ['m', 'f', 'outro'], required: true},
    medNotes: {type: String}
});
export default mongoose.model<IPatient>('Patient', PatientSchema);