import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import signUpReducer from './signUp';
import signInReducer from './signIn';

const reducers = {
  form: formReducer,
  signUp: signUpReducer,
  signIn: signInReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
