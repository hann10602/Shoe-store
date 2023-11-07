import { produce } from 'immer';
import { handleActions } from 'redux-actions';

import { TUserProfileFullState, initProfileFullState } from './actions';
import { UserActionTypes } from './types';

export const userProfileReducer = handleActions<TUserProfileFullState, any>(
  {
    [UserActionTypes.REQUEST_USER_PROFILE]: (state) => ({
      ...state,
      is_loading: true,
    }),
    [UserActionTypes.REQUEST_USER_PROFILE]: (state) =>
      produce(state, (draft) => {
        draft.is_loading = true;
        draft.logged_in = false;
      }),

    [UserActionTypes.REQUEST_USER_PROFILE_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = false;
        draft.logged_in = true;
        draft.profile = action.payload;
      }),
    [UserActionTypes.REQUEST_USER_PROFILE_ERROR]: (state) => ({
      ...state,
      is_loading: false,
      logged_in: false,
    }),
    [UserActionTypes.EMAIL_USER_FORGOT_PASSWORD]: (state, action) => ({
      ...state,
      email_user_forgot_password: action.payload,
    }),
  },
  initProfileFullState,
);
