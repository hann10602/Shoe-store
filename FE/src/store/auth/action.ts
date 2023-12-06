import { BASE_URL } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginType, RegisterType } from "./type";

const baseAxios = axios.create({
  baseURL: BASE_URL,
});

baseAxios.interceptors.request.use(
  function (req) {
    return req;
  },
  function (err) {
    return Promise.reject(err);
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (param: LoginType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/auth/login`, param)
        .then((res) => res)
        .catch((err) => err);

      if (resp.code === "ERR_NETWORK") {
        return rejectWithValue(resp);
      } else if (resp.status === 200) {
        return resp.data;
      } else if (resp.code !== "ERR_NETWORK") {
        return rejectWithValue(resp);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const register = createAsyncThunk(
  "auth/register",
  async (param: RegisterType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/auth/register`, param)
        .then((res) => res)
        .catch((err) => err);

      if (resp.code === "ERR_NETWORK") {
        return rejectWithValue(resp);
      } else if (resp.status === 200) {
        return resp.data;
      } else if (resp.code !== "ERR_NETWORK") {
        return rejectWithValue(resp);
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const authAsyncAction = { login, register };
