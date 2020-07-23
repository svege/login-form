import TextField from '@material-ui/core/TextField/TextField';
import React, { ReactNode } from 'react';
import { RenderFieldProps } from '../../types/types';

export const renderUsernameField = (props: RenderFieldProps): ReactNode => {
  const {
    label,
    input,
    meta: { asyncValidating, touched, invalid, error },
    ...custom
  } = props;
  return (
    <div className={asyncValidating ? 'async-validating' : ''}>
      <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
      />
    </div>
  );
};
