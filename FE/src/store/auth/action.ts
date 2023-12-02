import { BASE_URL } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginType, RegisterType } from "./type";

const baseUrl = BASE_URL;

const login = createAsyncThunk(
  "auth/login",
  async (param: LoginType, { rejectWithValue }) => {
    try {
      const resp = await axios
        .post(`${baseUrl}/auth/login`, param)
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
      const resp = await axios
        .post(`${baseUrl}/auth/register`, param)
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
