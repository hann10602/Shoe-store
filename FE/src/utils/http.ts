/* eslint-disable */
import axios from "../commons/axios";
import httpStatus from "../commons/httpStatus";
import { apiRouteGenerator } from "../services/common.services";
import { store } from "../store";
import { AuthActionTypes } from "../store/auth/types";
import { CommonRequestError } from "../store/common/actions";

interface IQueryParam {
  key: string;
  value: string | number;
}
class HttpClientHelper {
  async get<T>(path: string, idParam?: number, query?: IQueryParam[]) {
    try {
      const endpoint = apiRouteGenerator(path, idParam, query);
      const response = await axios.get<T>(endpoint);
      return response.data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }

  async post<T, U>(
    path: string,
    payload?: U,
    idParam?: number,
    headerConfig?: any
  ) {
    try {
      const endpoint = apiRouteGenerator(path, idParam);
      const { data } = await axios.post<T>(endpoint, payload, headerConfig);
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }

  async put<T, U>(path: string, payload: U, idParam?: number) {
    try {
      const endpoint = idParam
        ? apiRouteGenerator(path, idParam)
        : apiRouteGenerator(path);
      const { data } = await axios.put<T>(endpoint, payload);
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }

  async patch<T, U>(path: string, payload: U, idParam?: number) {
    try {
      const endpoint = apiRouteGenerator(path, idParam);
      const { data } = await axios.patch<T>(endpoint, payload);
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }

  async delete<T, U = {}>(path: string, payload?: U, idParam?: number) {
    try {
      const endpoint = apiRouteGenerator(path, idParam);
      const { data } = await axios.delete<T>(endpoint, { data: payload });
      return data;
    } catch (ex) {
      handleError(ex);
      return {} as T;
    }
  }
}

function handleError(error: any) {
  if (error && error.status === httpStatus.StatusNotFound) return;
  const timeout = httpStatus.StatusUnauthorized ? 2000 : null;
  const action =
    error && error.status === httpStatus.StatusUnauthorized
      ? AuthActionTypes.USER_LOGOUT
      : "";
  const msg =
    error && error.data ? error.data.message : "Cannot connect server.";

  store.dispatch(CommonRequestError({ message: msg, action, timeout }));
}

export const ApiHelper = new HttpClientHelper();
