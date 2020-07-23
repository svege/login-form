import { WrappedFieldProps } from 'redux-form';

export interface INewUser {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  city: string;
  address: string;
  gender: string;
  smsLogin: boolean;
}

export interface IExistingUser {
  username: string;
  password: string;
}

export interface RenderFieldProps extends WrappedFieldProps {
  label: string;
}
