import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import React, { ReactNode } from 'react';
import { RenderFieldProps } from '../../types/types';

export const renderCheckbox = (props: RenderFieldProps): ReactNode => {
  const { input, label } = props;

  return (
    <FormControl fullWidth>
      <FormControlLabel
        control={<Checkbox checked={!!input.value} onChange={input.onChange} />}
        label={label}
      />
    </FormControl>
  );
};
