import FormHelperText from '@material-ui/core/FormHelperText';
import React, { ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';

export const renderFromHelper = (
  props: WrappedFieldProps
): ReactNode | undefined => {
  const { touched, error } = props.meta;
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};
