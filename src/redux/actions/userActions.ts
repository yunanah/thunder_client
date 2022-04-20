import axios from 'axios';
import {Dispatch} from 'react';
import {BASE_URL} from '../../utils/AppConst';

export interface UserModel {
  userName: string;
  phone: string;
  gender: string;
  token: string;
  position: {
    latitude: number;
    longitude: number;
  };
}

export interface LoginAction {
  readonly type: 'ON_LOGIN';
  payload: UserModel;
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any;
}

export type UserAction = LoginAction | ErrorAction;

// dispatch actions
export const onLogin = async (phone: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await axios.post<UserModel>(`${BASE_URL}/login`, {
      phone,
    });

    if (!response) {
      dispatch({
        type: 'ON_ERROR',
        payload: 'Login issue with API',
      });
    } else {
      dispatch({
        type: 'ON_LOGIN',
        payload: response.data,
      });
    }
  };
};
