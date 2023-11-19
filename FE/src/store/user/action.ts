import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ChangePasswordUserType,
  CreateUserType,
  DeleteUserType,
  GetUserType,
  UpdateUserType,
} from "./type";
import { BASE_URL, getToken } from "@/utils";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk("size/getOne", async (param: GetUserType) => {
  try {
    const resp = await axios.get(`${baseUrl}/user/self/${param.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("user/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/user/get-all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
        JSON.stringify(param),
        { headers: { Authorization: `Bearer ${token}` } }
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
        JSON.stringify(param),
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const changePassword = createAsyncThunk(
  "user/change-password",
  async (param: ChangePasswordUserType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/user/change-password`,
        JSON.stringify(param),
        { headers: { Authorization: `Bearer ${token}` } }
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
        JSON.stringify(param),
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

export const userAsyncAction = {
  getOne,
  getAll,
  changePassword,
  create,
  update,
  deletes,
};
