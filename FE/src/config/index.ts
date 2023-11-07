// eslint-disable-next-line @typescript-eslint/naming-convention
export type GOOGLE_CONFIG = {
  active: boolean;
  google_client_id: string;
  google_client_secret: string;
};
// eslint-disable-next-line @typescript-eslint/naming-convention
export type PUBLIC_CONFIG = {
  default_login: 'account' | 'google' | 'facebook';
  google_client_id: string;
  logo: string;
};
