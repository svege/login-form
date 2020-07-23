import React, { ReactNode } from 'react';
import TextField from '@material-ui/core/TextField';
import { RenderFieldProps } from '../../types/types';

export const renderTextField = (props: RenderFieldProps): ReactNode => {
  const {
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  } = props;

  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};
