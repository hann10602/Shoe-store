import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateCartType,
  DeleteCartType,
  GetCartByUserIdType,
  GetCartType,
  UpdateCartType,
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
  "cart/self",
  async (param: GetCartType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/cart/self/${param.id}`)
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
  "cart/getAll",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/cart/get-all`)
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
  "cart/getByUserId",
  async (params: GetCartByUserIdType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/cart/get-by-user-id/${params.userId}`)
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

const create = createAsyncThunk(
  "cart/create",
  async (param: CreateCartType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/cart/create`, param)
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
  "cart/update",
  async (param: UpdateCartType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .put(`/cart/update`, param)
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
  "cart/delete",
  async (param: DeleteCartType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .delete(`/cart/delete/${param.id}`)
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

export const cartAsyncAction = {
  getOne,
  getAll,
  getByUserId,
  create,
  update,
  deletes,
};
