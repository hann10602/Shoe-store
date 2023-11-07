import { TRootState } from '../index';
import { TUserProfileFullState } from './actions';

export const UserProfileState = (state: TRootState): TUserProfileFullState => state.userProfile;
export const IsLoggedIn = (state: TRootState): boolean => state.userProfile.logged_in;
