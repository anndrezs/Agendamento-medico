export interface CreateAppointmentDTO{
    patientName: string;
    doctorName: string;
    date: Date;
    status: 'pendente' | 'confirmada' | 'cancelada' | 'realizada';
    note?: string;
    createdAt: Date;
}