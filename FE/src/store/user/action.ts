import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateUserType,
  DeleteUserType,
  GetUserType,
  UpdateUserType
} from "./type";

const baseUrl = process.env.PUBLIC_URL;

const getOne = createAsyncThunk("size/getOne", async (param: GetUserType) => {
  try {
    const resp = await axios.get(`${baseUrl}/user/self/${param.id}`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("user/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/user/get-all`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const create = createAsyncThunk(
  "user/create",
  async (param: CreateUserType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/user/create`,
        JSON.stringify(param)
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const update = createAsyncThunk(
  "user/update",
  async (param: UpdateUserType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/user/update`,
        JSON.stringify(param)
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const deletes = createAsyncThunk(
  "user/delete",
  async (param: DeleteUserType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/user/delete`,
        JSON.stringify(param)
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

export const userAsyncAction = { getOne, getAll, create, update, deletes };
