import { ApiHelper } from '@/utils';

import { IResponse } from '../common.services';
import { IUser } from '../user';
import {
  IParamLogin,
  IParamRegisterNormal,
  IParamForgotPassword,
  IParamResetPassword,
  IResponseAuth,
  IParamLoginOther,
} from './auth.interface';

class AuthServiceRoute {
  static readonly REGISTER_NORMAL = '/auth/register';

  static readonly LOGIN_GOOGLE_AUTH = '/auth/login/google';

  static readonly LOGIN_FACEBOOK_AUTH = '/auth/login/facebook';

  static readonly LOGIN_AUTH = '/auth/login';

  static readonly VERIFY_ACCOUNT = '/auth/verify-account';

  static readonly REQUEST_FORGOT_AUTH = '/auth/forgot-password';

  static readonly CONFIRM_FORGOT_AUTH = '/auth/confirm-reset-password';

  static readonly RESET_FORGOT_AUTH = '/auth/reset-password';

  static readonly REFRESH_TOKEN_AUTH = '/auth/refresh-token';
}

// New api

export const registerUserNormal = async (params: IParamRegisterNormal) => {
  return ApiHelper.post<IResponse<IUser>, IParamLogin>(AuthServiceRoute.REGISTER_NORMAL, params);
};

export const loginAuth = async (params: IParamLogin) => {
  return ApiHelper.post<IResponse<IResponseAuth>, IParamLogin>(AuthServiceRoute.LOGIN_AUTH, params);
};

export const googleAuth = async (params: IParamLoginOther) => {
  return ApiHelper.post<IResponse<IResponseAuth>, IParamLoginOther>(AuthServiceRoute.LOGIN_GOOGLE_AUTH, params);
};

export const facebookAuth = async (params: IParamLoginOther) => {
  return ApiHelper.post<IResponse<IResponseAuth>, IParamLoginOther>(AuthServiceRoute.LOGIN_FACEBOOK_AUTH, params);
};

export const conFirmRegisterNormal = async (token: string) => {
  return ApiHelper.get<IResponse<any>>(`${AuthServiceRoute.VERIFY_ACCOUNT}/${token}`);
};

export const refreshTokenAuth = async (refreshToken: string) => {
  const bodyRequest = { refreshToken };
  return ApiHelper.post<IResponse<IUser>, typeof bodyRequest>(AuthServiceRoute.REFRESH_TOKEN_AUTH, bodyRequest);
};

export const requestForgotPassword = async (payload: IParamForgotPassword) => {
  return ApiHelper.post<IResponse<any>, typeof payload>(AuthServiceRoute.REQUEST_FORGOT_AUTH, payload);
};

export const resetForgotPassword = async (payload: IParamResetPassword) => {
  return ApiHelper.post<IResponse<any>, typeof payload>(AuthServiceRoute.RESET_FORGOT_AUTH, payload);
};

export const logout = async () => {
  window.localStorage.clear();
};
