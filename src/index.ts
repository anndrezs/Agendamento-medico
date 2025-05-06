import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from '../src/routes/User.routes';
import specialtyRoutes from '../src/routes/Specialty.routes';
import PatientRoutes from './routes/Patient.routes';
import DoctorRoutes from './routes/Doctor.routes'
import AppointmentRoutes from './routes/Appointment.routes';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/specialty', specialtyRoutes);
app.use('/api/patient', PatientRoutes)
app.use('api/doctor', DoctorRoutes);
app.use('api/appointment', AppointmentRoutes);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || '').then(() => {
  console.log('MongoDB conectado com sucesso');
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.error('Erro ao conectar ao MongoDB:', err));
