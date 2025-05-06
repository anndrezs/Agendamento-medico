export interface CreateUserDTO{
    name: string;
    email: string;
    role: 'paciente'|'medico'|'admin'
}