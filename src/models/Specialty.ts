import mongoose, {Document, Schema} from "mongoose";

export interface ISpecialty extends Document{
    name: string;
    description: string;
}

const SpecialtySchema = new Schema<ISpecialty>({
    name: { type: String, required: true },
    description: { type: String }
});

export default mongoose.model<ISpecialty>('Specialty', SpecialtySchema);

