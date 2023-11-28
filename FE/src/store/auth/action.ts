import { BASE_URL } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginType, RegisterType } from "./type";

const baseUrl = BASE_URL;

const login = createAsyncThunk(
  "auth/login",
  async (param: LoginType, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`${baseUrl}/auth/login`, param);

      if (resp.status === 200) {
        return resp.data;
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
      console.log('vao roi')
      const resp = await axios.post(
        `${baseUrl}/auth/register`,
        param
      );

      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      console.log('reject roi')

      return rejectWithValue(err);
    }
  }
);

export const authAsyncAction = { login, register };
