import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import validate from '../../../helpers/validation/validate';
import {
  renderTextField,
  renderCheckbox,
  renderRadioButton,
  renderSelectField
} from '../../../helpers/fields';
import Radio from '@material-ui/core/Radio/Radio';
import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import { INewUser } from '../../../types/types';
import store from '../../../store/configureStore';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import { cities } from '../../../helpers/const/const';

const saveToLocal = (values: INewUser[]) => {
  try {
    localStorage.setItem('values', JSON.stringify(values));
  } catch (err) {
    return undefined;
  }
};

interface Props {
  previousPage: any;
}

const WizardFormSecondPage: React.FC<Props & InjectedFormProps<{}, Props>> = (
  props: any
) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    classes,
    previousPage,
    addUserHandler
  } = props;

  const handleSignUp = (values: INewUser) => {
    addUserHandler(values);
    saveToLocal(store.getState().signUp.users);
    alert('You submitted your registration info');
  };

  let citiesOptions = cities.map(item => <option key={item} value={item}>{item}</option>);

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <Typography variant="h5" align="center" component="legend" gutterBottom>
        Sign Up
      </Typography>
      <div style={{ marginBottom: 40 }}>
        <Field
          style={{ marginBottom: 20 }}
          name="gender"
          component={renderRadioButton}
        >
          <Radio value="male" />
          <Radio value="female" />
          <Radio value="other" />
        </Field>
        <Field
          style={{ marginBottom: 20 }}
          classes={classes}
          name="city"
          component={renderSelectField}
          label="city"
        >
          {citiesOptions}
        </Field>
        <Field
          style={{ marginBottom: 20 }}
          fullWidth
          name="address"
          component={renderTextField}
          label="Address"
        />
        <Field
          style={{ marginBottom: 20 }}
          fullWidth
          name="smsLogin"
          component={renderCheckbox}
          label="SMS Login"
        />
      </div>
      <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
      <Button
          variant="contained"
          style={{ display: 'block', width: 150, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20}}
          className="previous"
          onClick={previousPage}
          fullWidth={true}
      >
        Previous
      </Button>
        <Button
          style={{ display: 'block', width: 150, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20 }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={pristine || submitting}
          fullWidth={true}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: INewUser }) => any
) => {
  return {
    addUserHandler: (item: INewUser) => dispatch(actions.signUp(item))
  };
};

const secondPage = reduxForm<{}, Props>({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormSecondPage);

export default connect(null, mapDispatchToProps)(React.memo(secondPage));
