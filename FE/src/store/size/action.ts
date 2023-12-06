import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateSizeType,
  DeleteSizeType,
  GetQuantityType,
  GetSizeByShoeIdType,
  GetSizeType,
  UpdateSizeType,
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
  "size/self",
  async (param: GetSizeType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/size/self/${param.id}`)
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
  "size/get-all",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/size/get-all`, {})
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

const getSizeQuantity = createAsyncThunk(
  "size/get-quantity",
  async (param: GetQuantityType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(
          `/size/get-quantity?shoeId=${param.shoeId}&sizeCode=${param.sizeCode}`
        )
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

const getByShoeId = createAsyncThunk(
  "size/getByShoeId",
  async (params: GetSizeByShoeIdType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/size/get-by-shoe-id/${params.shoeId}`)
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
  "size/create",
  async (param: CreateSizeType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/size/create`, param)
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
  "size/update",
  async (param: UpdateSizeType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .put(`/size/update`, param)
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
  "size/delete",
  async (param: DeleteSizeType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .delete(`/size/delete/${param.id}`)
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

export const sizeAsyncAction = {
  getOne,
  getAll,
  getByShoeId,
  getSizeQuantity,
  create,
  update,
  deletes,
};
