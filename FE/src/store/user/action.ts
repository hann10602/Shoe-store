import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ChangePasswordUserType,
  CreateUserType,
  DeleteUserType,
  GetUserType,
  UpdateUserType,
} from "./type";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk(
  "user/self",
  async (param: GetUserType, { rejectWithValue }) => {
    try {
      const resp = await axios
        .get(`${baseUrl}/user/self/${param.id}`, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
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

const getAll = createAsyncThunk(
  "user/get-all",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await axios
        .get(`${baseUrl}/user/get-all`, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
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
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

const create = createAsyncThunk(
  "user/create",
  async (param: CreateUserType, { rejectWithValue }) => {
    try {
      const resp = await axios
        .post(`${baseUrl}/auth/register`, param, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
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

const update = createAsyncThunk(
  "user/update",
  async (param: UpdateUserType, { rejectWithValue }) => {
    try {
      const resp = await axios
        .put(`${baseUrl}/user/update`, param, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
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

const changePassword = createAsyncThunk(
  "user/change-password",
  async (param: ChangePasswordUserType, { rejectWithValue }) => {
    try {
      const resp = await axios
        .put(`${baseUrl}/user/change-password`, param, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
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

const deletes = createAsyncThunk(
  "user/delete",
  async (param: DeleteUserType, { rejectWithValue }) => {
    try {
      const resp = await axios
        .delete(`${baseUrl}/user/delete/${param.id}`, {
          headers: { Authorization: `Bearer ${token.token}` },
        })
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

export const userAsyncAction = {
  getOne,
  getAll,
  changePassword,
  create,
  update,
  deletes,
};
