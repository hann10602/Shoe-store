export interface IUser {
  id: string;
  email: string;
  password?: string;
  name: string;
  accessToken?: string;
  refreshToken?: string;
  googleKey?: string;
  facebookKey?: string;
}
