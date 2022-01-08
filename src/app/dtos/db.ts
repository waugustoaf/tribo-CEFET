import { IPlanProps } from './plans';
import { IUserProps } from './user';

interface IAuthProps {
  hasSeen: boolean;
  user: IUserProps;
  token: string;
}

interface IDataProps {
  auth: IAuthProps;
  plans: IPlanProps[];
}

export { IAuthProps, IDataProps, IUserProps };
