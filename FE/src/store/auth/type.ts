export type LoginUserType = {
  id: number;
  fullName: string;
  username: string;
  password: string;
  email: string;
  phoneNum: number;
  role: string;
  address: string;
  avatar: string;
  token: string;
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
  phoneNum: number;
  role: string;
  address: string;
};