import { TRootState } from '../index';
import { TAuthState } from './reducers';

export const IsLoggedIn = (state: TRootState): boolean => state.auth.logged_in;
export const AuthState = (state: TRootState): TAuthState => state.auth;
export const errLogin = (state: TRootState): TAuthState => state.auth.err;
