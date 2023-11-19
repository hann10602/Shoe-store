import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginType, RegisterType } from "./type";

const baseUrl = process.env.PUBLIC_URL;

const login = createAsyncThunk(
  "auth/login",
  async (param: LoginType, { rejectWithValue }) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/auth/login`,
        JSON.stringify(param)
      );

      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      // return rejectWithValue(err);
      return err;
    }
  }
);

const register = createAsyncThunk(
  "auth/register",
  async (param: RegisterType, { rejectWithValue }) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/auth/register`,
        JSON.stringify(param)
      );

      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const authAsyncAction = { login, register };
