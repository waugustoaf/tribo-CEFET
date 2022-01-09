import { IUserProps } from './user';

export interface IEmployeeProps {
  id: string;
  hoursPerDay: number;
  wage: number;
  education: string;
  payment_day: number;
  user: IUserProps;
}
