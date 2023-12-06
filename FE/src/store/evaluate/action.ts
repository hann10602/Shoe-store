import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateEvaluateType,
  DeleteEvaluateType,
  GetEvaluateType,
  GetEvaluatesByShoeIdType,
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
  "evaluate/self",
  async (param: GetEvaluateType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/evaluate/self/${param.id}`)
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
  "evaluate/getByShoeId",
  async (param: GetEvaluatesByShoeIdType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/evaluate/get-by-shoe-id/${param.shoeId}`)
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
  "evaluate/create",
  async (param: CreateEvaluateType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/evaluate/create`, param)
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
  "evaluate/delete",
  async (param: DeleteEvaluateType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/evaluate/delete`, param)
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

export const evaluateAsyncAction = { getOne, getByShoeId, create, deletes };
