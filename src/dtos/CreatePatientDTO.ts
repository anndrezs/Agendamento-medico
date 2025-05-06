export interface CreatePatientDTO {
    userName: string;
    birthdate: Date;
    gender: 'm' | 'f' | 'outro';
    medNotes?: string;
  }