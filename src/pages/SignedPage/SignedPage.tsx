import React from 'react';
import {InjectedFormProps} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const SignedPage: React.FC<InjectedFormProps> = (props: any) => {
  const {signOutHandler} = props;

  const handleSignOut = () => {
    signOutHandler();
    localStorage.removeItem('isSignedIn');
    props.history.push('/');
  };

  return (
    <Paper style={{padding: 30, margin: '40px auto', maxWidth: 300}}>
      <Typography variant="h5" align="center" component="p" gutterBottom>
        Success
      </Typography>
      <Button
        style={{width: 150}}
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSignOut}
      >
        Log Out
      </Button>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch: (arg0: { type: string }) => any) => {
  return {
    signOutHandler: () => dispatch(actions.signOut())
  };
};

export default connect(null, mapDispatchToProps)(React.memo(SignedPage));
