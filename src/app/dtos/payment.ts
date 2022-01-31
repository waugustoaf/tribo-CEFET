import { IUserProps } from './user';

export interface IPaymentsProps {
  id: string;
  receipt_image: string;
  user: IUserProps;
  value: number;
  monthAndYear: string;
}
