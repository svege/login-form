import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Link as RouterLink} from 'react-router-dom';
import * as fields from '../../helpers/fields';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import {IExistingUser} from '../../types/types';
import Paper from '@material-ui/core/Paper/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";

const SignInPage: React.FC<InjectedFormProps> = (props: any) => {
  const {error, handleSubmit, pristine, submitting, logInHandler} = props;

  const handleSignIn = (values: IExistingUser) => {
    logInHandler(values);
    localStorage.setItem('isSignedIn', 'true');
    props.history.push('/logged');
  };

  return (
    <Paper style={{padding: 30, margin: '40px auto', maxWidth: 300}}>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Typography
          variant="h5"
          align="center"
          component="legend"
          gutterBottom
        >
          Sign In
        </Typography>
        <div style={{marginBottom: 40}}>
          <div>
            <Field
              fullWidth
              name="username"
              type="text"
              component={fields.renderTextField}
              label="Username"
            />
          </div>
          <div>
            <Field
              fullWidth
              name="password"
              type="password"
              component={fields.renderTextField}
              label="Password"
            />
          </div>
          {error && <strong>{error}</strong>}
        </div>
        <Button
          style={{width: 150}}
          variant="contained"
          color="primary"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </Button>
        <Link component={RouterLink} style={{display: 'block', marginTop: 40}} to="/signup">
          Sign Up
        </Link>
      </form>
    </Paper>
  );
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload?: IExistingUser | null }) => any
) => {
  return {
    logInHandler: (item: IExistingUser) => dispatch(actions.signIn(item))
  };
};

const signIn = reduxForm({
  form: 'login'
})(SignInPage);

export default connect(null, mapDispatchToProps)(React.memo(signIn));
