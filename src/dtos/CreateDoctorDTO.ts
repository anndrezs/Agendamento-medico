export interface CreateDoctorDTO{
    userName: string;
    specialtyName: string;
    availableDays: string[];
    timeSlots: string[];
    status:'ativo' | 'inativo';
}