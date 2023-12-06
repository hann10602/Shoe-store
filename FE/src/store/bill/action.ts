import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateBillFromCartType,
  CreateBillType,
  DeleteBillType,
  GetBillByUserIdType,
  GetBillType,
  UpdateBillType,
} from "./type";

const token = getToken();

const baseAxios = axios.create({
  baseURL: BASE_URL,
});

baseAxios.interceptors.request.use(
  function (req) {
    req.headers.Authorization = `Bearer ${token.token}`;
    return req;
  },
  function (err) {
    console.log(err);
    return Promise.reject(err);
  }
);

const getOne = createAsyncThunk(
  "bill/self",
  async (param: GetBillType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/bill/self/${param.id}`)
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
  "bill/getAll",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/bill/get-all`)
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

const getByUserId = createAsyncThunk(
  "bill/getByUserId",
  async (params: GetBillByUserIdType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/bill/get-by-user-id/${params.userId}`)
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
  "bill/create",
  async (param: CreateBillType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/bill/create`, param)
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

const createFromCart = createAsyncThunk(
  "bill/createFromCart",
  async (param: CreateBillFromCartType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/bill/create-from-cart`, param)
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
  "bill/update",
  async (param: UpdateBillType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .put(`/bill/update`, param)
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
  "bill/delete",
  async (param: DeleteBillType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .delete(`/bill/delete/${param.id}`)
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

export const billAsyncAction = {
  getOne,
  getAll,
  getByUserId,
  create,
  createFromCart,
  update,
  deletes,
};
