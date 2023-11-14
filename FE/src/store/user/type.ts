export type UserType = {
  id: number;
  fullName: string;
  username: string;
  password: string;
  email: string;
  phoneNum: number;
  avatar: string;
  role: string;
  address: string;
};

export type GetUserType = {
  id: number;
};

export type CreateUserType = {
  fullName: string;
  username: string;
  password: string;
  email: string;
  phoneNum: number;
  avatar: string;
  role: string;
  address: string;
};

export type UpdateUserType = {
  id: number;
  fullName: string;
  username: string;
  email: string;
  phoneNum: number;
  address: string;
};

export type ChangePasswordType = {
  id: number;
  password: string;
};

export type DeleteUserType = GetUserType;
