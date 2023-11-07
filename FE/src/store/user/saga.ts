import { put, call, takeLatest } from 'redux-saga/effects';

import { getUserProfile } from '../../services/user';
import { UserProfileRequestSuccess } from './actions';
import { UserActionTypes } from './types';

export const menuSagas = [takeLatest(UserActionTypes.REQUEST_USER_PROFILE, fetchProfileUser)];

function* fetchProfileUser(): any {
  const payloadUserProfile = yield call(async () => getUserProfile());
  if (payloadUserProfile.success) {
    yield put(UserProfileRequestSuccess(payloadUserProfile.data));
  }
}
