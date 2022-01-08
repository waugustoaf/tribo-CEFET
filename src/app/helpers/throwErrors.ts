import { IAuthProps } from '../dtos/db';

export const throwErrors = (err: any, defaultMessage?: string): string => {
  if (
    (err.response?.data?.statusCode === 403 ||
      err.response?.data?.statusCode === 401) &&
    (err.response?.data?.errorKey === 'token.invalid' ||
      err.response?.data?.errorKey === 'error.unauthorized' ||
      err.response?.data?.errorKey === 'token.notFound')
  ) {
    const auth = JSON.parse(localStorage.getItem('tribo:auth')) as IAuthProps;

    auth.token = '';
    auth.user = null;

    localStorage.setItem('tribo:auth', JSON.stringify(auth));
  }

  if (err.response?.data?.errored && !!err.response?.data?.message) {
    return err.response?.data?.message;
  }

  return defaultMessage;
};
