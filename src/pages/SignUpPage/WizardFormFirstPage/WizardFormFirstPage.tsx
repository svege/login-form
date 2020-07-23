import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import validate from '../../../helpers/validation/validate';
import * as fields from '../../../helpers/fields';
import asyncValidate from '../../../helpers/validation/asyncValidate';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';

interface Props {
}

const WizardFormFirstPage: React.FC<Props & InjectedFormProps<{}, Props>> = (
  props: any
) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" align="center" component="legend" gutterBottom>
        Sign Up
      </Typography>
      <div style={{marginBottom: 40}}>
        <div>
          <Field
            fullWidth
            name="fullName"
            component={fields.renderTextField}
            label="Full name"
          />
        </div>
        <div>
          <Field
            fullWidth
            name="username"
            component={fields.renderUsernameField}
            label="Username"
          />
        </div>
        <div>
          <Field
            fullWidth
            name="password"
            component={fields.renderTextField}
            label="Password"
            type="password"
          />
        </div>
        <div>
          <Field
            fullWidth
            name="confirmPassword"
            component={fields.renderTextField}
            label="Repeat password"
            type="password"
          />
        </div>
      </div>
      <Button
        variant="contained"
        style={{width: 150}}
        color="primary"
        type="submit"
        className="next"
      >
        Next
      </Button>
    </form>
  );
};

const firstPage = reduxForm<{}, Props>({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
  asyncValidate,
  asyncBlurFields: ['username']

})(WizardFormFirstPage);

export default connect(null)(React.memo(firstPage));
