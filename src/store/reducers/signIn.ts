import * as actionTypes from '../actions/actionTypes';
import { IExistingUser } from '../../types/types';

type initialStateType = {
  loggedUser: IExistingUser | null;
  isLogged: boolean;
};

const initialState: initialStateType = {
  loggedUser: {
    username: '',
    password: ''
  },
  isLogged: false
};

const signUp = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return {
        ...state,
        loggedUser: action.payload,
        isLogged: true
      };
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        loggedUser: null,
        isLogged: false
      };

    default:
      return state;
  }
};

export default signUp;
