import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio/Radio';
import React, { ReactNode } from 'react';
import { RenderFieldProps } from '../../types/types';
import FormLabel from '@material-ui/core/FormLabel';

export const renderRadioButton = (props: RenderFieldProps): ReactNode => {
  const { input, meta: { touched, error }, ...rest } = props;
  return (
    <FormControl error={touched && error}  fullWidth>
      <FormLabel htmlFor="gender" style={{ textAlign: 'left' }}>
        Gender
      </FormLabel>
      <RadioGroup {...input} {...rest}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};
