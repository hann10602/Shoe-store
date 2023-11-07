import { produce } from 'immer';
import { handleActions } from 'redux-actions';

import { AuthActionTypes } from './types';

export interface TAuthState {
  is_loading: boolean;
  logged_in: boolean;
  err: any;
}

const initData: TAuthState = {
  is_loading: false,
  logged_in: false,
  err: null,
};

export const authReducer = handleActions<TAuthState, any>(
  {
   
    [AuthActionTypes.REQUEST_LOGIN_USER]: (state) =>
      produce(state, (draft) => {
        draft.is_loading = true;
        draft.err = null;
      }),
    [AuthActionTypes.REQUEST_LOGIN_USER_SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.logged_in = true;
        draft.is_loading = false;
      }),
    [AuthActionTypes.REQUEST_LOGIN_USER_ERROR]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = false;
        draft.logged_in = false;
        draft.err = action.payload;
      }),
    [AuthActionTypes.USER_LOGOUT]: (state) =>
      produce(state, (draft) => {
        draft.logged_in = false;
        draft.is_loading = false;
        draft.err = null;
      }),
    [AuthActionTypes.REMOVE_ERROR_LOGIN]: (state) =>
      produce(state, (draft) => {
        draft.logged_in = false;
        draft.is_loading = false;
        draft.err = null;
      }),
  },
  initData,
);
