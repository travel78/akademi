export interface ITeacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  university: string;
  degree: string;
  city: string;
  photoUrl: string;
}

export interface ITeacherItem {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  degree: string;
  photoUrl?: string;
}
