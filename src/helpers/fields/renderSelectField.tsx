import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import React, { ReactNode } from 'react';
import { renderFromHelper } from './index';
import { RenderFieldProps } from '../../types/types';

interface RenderSelectProps extends RenderFieldProps {
  children: ReactNode;
}

export const renderSelectField = (props: RenderSelectProps): ReactNode => {
  const {
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  } = props;
  return (
    <FormControl error={touched && error} fullWidth>
      <InputLabel htmlFor="city" style={{ textAlign: 'left' }}>
        City
      </InputLabel>
      <Select
        displayEmpty={true}
        {...input}
        {...custom}
        inputProps={{
          name: 'city',
          id: 'city'
        }}
      >
        {children}
      </Select>
      {renderFromHelper(props)}
    </FormControl>
  );
};
