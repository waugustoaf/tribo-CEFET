export interface IUserProps {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  avatar?: string;
  birth_date: number;
  role: 'administrator' | 'employee' | 'client';
  active: boolean;
}
