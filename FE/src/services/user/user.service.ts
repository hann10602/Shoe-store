import { ApiHelper } from '@/utils';

import { IListResponse, IQueryParam, IResponse } from '../common.services';
import { IUser } from './user.interface';

class UserGroupServiceRoute {
  static readonly USERS = '/users/me';
}

export const getUserProfile = async (query?: IQueryParam[]) => {
  return ApiHelper.get<IListResponse<IUser>>(UserGroupServiceRoute.USERS, undefined, query);
};

export const addUserGroup = async (body: IUser) => {
  return ApiHelper.post<IResponse<IUser>, IUser>(UserGroupServiceRoute.USERS, body);
};

export const updateUserGroup = async (payload: IUser, id?: number) => {
  return ApiHelper.put<IResponse<IUser>, IUser>(UserGroupServiceRoute.USERS, payload, id);
};

export const deleteUserGroup = async (id?: number) => {
  return ApiHelper.delete<IResponse<IUser>, number>(UserGroupServiceRoute.USERS, undefined, id);
};
