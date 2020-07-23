import * as actionTypes from '../actions/actionTypes';
import { INewUser } from '../../types/types';

type initialStateType = {
  users: Array<INewUser>;
  passwordPatterns: Array<string>;
};

const initialState: initialStateType = {
  users: [
    {
      fullName: 'john smith',
      username: 'john',
      password: '12345',
      confirmPassword: '12345',
      city: 'Moscow',
      gender: 'other',
      address: 'test address',
      smsLogin: true
    }
  ],
  passwordPatterns: []
};

const signUp = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case actionTypes.SIGN_UP:
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    default:
      return state;
  }
};

export default signUp;
