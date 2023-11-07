import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import httpStatus from "@/commons/httpStatus";
import { errorCode } from "@/constants";
import { IParamLogin, loginAuth, logout } from "@/services/auth";
import { getUserProfile, IUser } from "@/services/user";

import history from "../history";
import { UserLoginRequestError, UserLoginRequestSuccess } from "./actions";
import { AuthActionTypes } from "./types";

interface IActionLoginSuccess {
  type: string;
  payload: IUser;
}

interface IAction {
  type: string;
  payload: IParamLogin | string;
}

function forwardTo(location: string) {
  history.push(location);
}

function* handleErrorCodeLogin(payload: any) {
  if (
    payload.statusCode === httpStatus.StatusNotFound ||
    payload.statusCode === httpStatus.StatusBadRequest
  ) {
    yield put(UserLoginRequestError(payload.message));
  } else {
    const payloadErrCode = payload.errorCode;
    const messageError = errorCode?.[payloadErrCode as keyof typeof errorCode];
    yield put(UserLoginRequestError(messageError));
  }
}

function* loginNormal(action: IAction): any {
  try {
    const payload = yield call(async () =>
      loginAuth(action.payload as IParamLogin)
    );

    if (payload.data && payload.success) {
      yield put(UserLoginRequestSuccess(payload.data));
    } else {
      yield call(() => handleErrorCodeLogin(payload));
    }
  } catch (error: any) {
    return yield put(UserLoginRequestError(error.data.message));
  }
}

function* processingUserLoginSuccess(action: IActionLoginSuccess) {
  const currentUser = action.payload;
  window.localStorage.setItem("jwt", currentUser?.accessToken ?? "");
  window.localStorage.setItem("refresh_token", currentUser?.refreshToken ?? "");
  const redirectPage = "/";
  yield call(async () => getUserProfile());

  const rd = new URLSearchParams(window.location.search).get("rd");
  yield call(forwardTo, rd ?? redirectPage);
}

function* doLogout() {
  try {
    yield call(async () => logout());
    window.localStorage.clear();
    yield put({ type: AuthActionTypes.USER_LOGOUT });
  } catch (e) {
    console.log("Error logging out", e);
  }
}

export const authSagas = [
  takeLatest(AuthActionTypes.REQUEST_LOGIN_USER, loginNormal),
  takeEvery(
    AuthActionTypes.REQUEST_LOGIN_USER_SUCCESS,
    processingUserLoginSuccess
  ),
  takeEvery(AuthActionTypes.REQUEST_USER_LOGOUT, doLogout),
];
