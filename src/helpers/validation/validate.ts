import { INewUser } from '../../types/types';
import { FormErrors } from 'redux-form';

const validate = (values: INewUser): FormErrors<INewUser> => {
  const errors: FormErrors<INewUser> = {};

  if (!values.password) {
    errors.password = 'Required';
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(
      values.password
    )
  ) {
    errors.password = 'At least 8 characters long. Must have a letter, a number, and a special character';
  } else {
    errors.password = '';
  }

  if (!values.username) {
    errors.username = 'Required';
  }

  if (!values.fullName) {
    errors.fullName = 'Required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password mismatched';
  }

  if (!values.city) {
    errors.city = 'Required';
  }

  if (!values.gender) {
    errors.gender = 'Required';
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  return errors;
};

export default validate;
