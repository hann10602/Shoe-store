export interface IParamLogin {
  email: string;
  password: string;
}
export interface IParamRegisterNormal {
  email: 'string';
  password: 'string';
  tokenRecaptcha: 'string';
}

export interface IParamForgotPassword {
  email: string;
  tokenRecaptcha: string;
}

export interface IParamResetPassword {
  tokenResetPassword: string;
  password: string;
}
export interface IResponseAuth {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IResponseRefreshToken {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
}

export interface IParamLoginOther {
  token: string;
}
