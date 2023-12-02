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

const baseUrl = BASE_URL;
const token = getToken();

const baseAxios = axios.create();

baseAxios.interceptors.response.use(
  function (resp) {
    return resp;
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
        .get(`${baseUrl}/bill/self/${param.id}`, {
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
  "bill/getAll",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`${baseUrl}/bill/get-all`, {
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

const getByUserId = createAsyncThunk(
  "bill/getByUserId",
  async (params: GetBillByUserIdType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`${baseUrl}/bill/get-by-user-id/${params.userId}`, {
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
  "bill/create",
  async (param: CreateBillType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`${baseUrl}/bill/create`, param, {
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

const createFromCart = createAsyncThunk(
  "bill/createFromCart",
  async (param: CreateBillFromCartType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`${baseUrl}/bill/create-from-cart`, param, {
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
  "bill/update",
  async (param: UpdateBillType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .put(`${baseUrl}/bill/update`, param, {
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
  "bill/delete",
  async (param: DeleteBillType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .delete(`${baseUrl}/bill/delete/${param.id}`, {
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

export const billAsyncAction = {
  getOne,
  getAll,
  getByUserId,
  create,
  createFromCart,
  update,
  deletes,
};
