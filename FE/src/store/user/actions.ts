import { createAction } from 'redux-actions';

import { IUser } from '../../services/user';
import { UserActionTypes } from './types';

const initProfileState = {
  id: '',
  name: '',
  email: '',
};

export const initProfileFullState = {
  profile: initProfileState,
  is_loading: false,
  logged_in: false,
};

export interface TUserMenuFullState {
  menus: string[][];
  is_loading: boolean;
  is_fetch: boolean;
}

export const RequestUserProfile = createAction(UserActionTypes.REQUEST_USER_PROFILE);

export const UserProfileRequestSuccess = createAction<IUser>(UserActionTypes.REQUEST_USER_PROFILE_SUCCESS);

export const UserProfileRequestError = createAction(UserActionTypes.REQUEST_USER_PROFILE_ERROR);

export const EmailUserForgotPassword = createAction(UserActionTypes.EMAIL_USER_FORGOT_PASSWORD);

export type TUserProfileState = typeof initProfileState;
export type TUserProfileFullState = typeof initProfileFullState;
