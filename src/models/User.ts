import mongoose, {Document, Schema} from "mongoose";

export type UserRole = 'paciente' | 'medico' | 'admin';
export interface IUser extends Document {
  name: string;
  email: string;
  role: UserRole;
}
const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['paciente', 'medico', 'admin'], required: true }
});

export default mongoose.model<IUser>('User', UserSchema);