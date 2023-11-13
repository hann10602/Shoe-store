import { RootState } from "../store";

export const isLoginSelector = (state: RootState) =>
  state.auth.isLogin;

export const isRegisterSelector = (state: RootState) =>
  state.auth.isRegister;

export const authRespSelector = (state: RootState) => state.auth.response?.message;
