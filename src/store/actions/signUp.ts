import * as actionTypes from './actionTypes';
import { INewUser } from '../../types/types';

type signUpActionType = {
  type: typeof actionTypes.SIGN_UP;
  payload: INewUser;
};

export const signUp = (user: any): signUpActionType => {
  return {
    type: actionTypes.SIGN_UP,
    payload: user
  };
};
