export type JWTType = {
  id: number;
  token: string;
  role: string;
};

export type LoginType = {
  username: string;
  password: string;
};

export type RegisterType = {
  fullName: string;
  username: string;
  password: string;
  email: string;
  phoneNum: string;
  address: string;
};
