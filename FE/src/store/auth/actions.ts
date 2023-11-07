import { createAction } from "redux-actions";

import { AuthActionTypes } from "./types";

export const RequestUserLogin = createAction(
  AuthActionTypes.REQUEST_LOGIN_USER
);
export const UserLoginRequestError = createAction(
  AuthActionTypes.REQUEST_LOGIN_USER_ERROR
);
export const UserLoginRequestSuccess = createAction(
  AuthActionTypes.REQUEST_LOGIN_USER_SUCCESS
);
export const UserLogout = createAction(AuthActionTypes.REQUEST_USER_LOGOUT);
export const RemoveErrorLogin = createAction(
  AuthActionTypes.REMOVE_ERROR_LOGIN
);
