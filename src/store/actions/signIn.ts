import * as actionTypes from './actionTypes';
import { IExistingUser } from '../../types/types';
import authenticate from '../../helpers/auth/auth';

type signInActionType = {
  type: typeof actionTypes.SIGN_IN | typeof actionTypes.SIGN_IN_FAILED;
  payload: IExistingUser | null;
};

type signOutActionType = {
  type: typeof actionTypes.SIGN_OUT;
};

export const signIn = (user: any): signInActionType => {
  if (authenticate(user)) {
    return {
      type: actionTypes.SIGN_IN,
      payload: user
    };
  } else {
    return {
      type: actionTypes.SIGN_IN_FAILED,
      payload: null
    };
  }
};

export const signOut = (): signOutActionType => {
  return {
    type: actionTypes.SIGN_OUT
  };
};
