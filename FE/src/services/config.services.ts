import { GOOGLE_CONFIG } from '../config';

export interface IConfig {
  google_login: GOOGLE_CONFIG;
  account_login: {
    active: boolean;
  };
  app_id_google: string;
}

export interface IConfigPublic {
  default_login: 'account' | 'google' | 'facebook';
  google_client_id: string;
}
