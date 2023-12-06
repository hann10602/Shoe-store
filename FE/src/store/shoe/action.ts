import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateShoeType,
  DeleteShoeType,
  GetShoeType,
  GetShoesByCategoryType,
  SearchShoes,
  UpdateShoeType,
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
  "shoe/self",
  async (param: GetShoeType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/shoe/self?id=${param.id}`)
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
  "shoe/get-all",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/shoe/get-all`)
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

const getByCategory1 = createAsyncThunk(
  "shoe/getByCategory1",
  async (params: GetShoesByCategoryType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/shoe/get-by-category/${params.categoryCode}`)
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

const getByCategory2 = createAsyncThunk(
  "shoe/getByCategory2",
  async (params: GetShoesByCategoryType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/shoe/get-by-category/${params.categoryCode}`)
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

const getByCategory3 = createAsyncThunk(
  "shoe/getByCategory3",
  async (params: GetShoesByCategoryType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(`/shoe/get-by-category/${params.categoryCode}`)
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

const searchShoes = createAsyncThunk(
  "shoe/searchShoes",
  async (param: SearchShoes, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .get(
          `/shoe/search?s=?${param.search ? `&search=${param.search}` : ""}${
            param.category ? `&category=${param.category}` : ""
          }${param.size ? `&size=${param.size}` : ""}${
            param.priceFrom ? `&price-from=${param.priceFrom}` : ""
          }${param.priceTo ? `&price-to=${param.priceTo}` : ""}`
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

const create = createAsyncThunk(
  "shoe/create",
  async (param: CreateShoeType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .post(`/shoe/create`, param)
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
  "shoe/update",
  async (param: UpdateShoeType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .put(`/shoe/update`, param)
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
  "shoe/delete",
  async (param: DeleteShoeType, { rejectWithValue }) => {
    try {
      const resp = await baseAxios
        .delete(`/shoe/delete/${param.id}`)
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

export const shoeAsyncAction = {
  getOne,
  getAll,
  getByCategory1,
  getByCategory2,
  getByCategory3,
  searchShoes,
  create,
  update,
  deletes,
};
