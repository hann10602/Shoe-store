import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateShoeType,
  DeleteShoeType,
  GetShoeType,
  GetShoesByCategoryType,
  SearchShoes,
  UpdateShoeType,
} from "./type";
import { BASE_URL, getToken } from "@/utils";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk("size/self", async (param: GetShoeType) => {
  try {
    const resp = await axios.get(`${baseUrl}/shoe/self?id=${param.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("shoe/get-all", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/shoe/get-all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getByCategory1 = createAsyncThunk(
  "shoe/getByCategory1",
  async (params: GetShoesByCategoryType) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/shoe/get-by-category/${params.categoryCode}`,
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

const getByCategory2 = createAsyncThunk(
  "shoe/getByCategory2",
  async (params: GetShoesByCategoryType) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/shoe/get-by-category/${params.categoryCode}`,
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

const getByCategory3 = createAsyncThunk(
  "shoe/getByCategory3",
  async (params: GetShoesByCategoryType) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/shoe/get-by-category/${params.categoryCode}`,
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

const searchShoes = createAsyncThunk(
  "shoe/searchShoes",
  async (param: SearchShoes) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/shoe/search?s=?
        ${param.search && `search=${param.search}`}
        ${param.category && `&category=${param.category}`}
        ${param.size && `&size=${param.size}`}
        ${param.priceFrom && `&price-from=${param.priceFrom}`}
        ${param.priceTo && `&price-to=${param.priceTo}`}`,
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

const create = createAsyncThunk(
  "shoe/create",
  async (param: CreateShoeType) => {
    try {
      const resp = await axios.post(`${baseUrl}/shoe/create`, param, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const update = createAsyncThunk(
  "shoe/update",
  async (param: UpdateShoeType) => {
    try {
      const resp = await axios.post(`${baseUrl}/shoe/update`, param, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const deletes = createAsyncThunk(
  "shoe/delete",
  async (param: DeleteShoeType) => {
    try {
      const resp = await axios.post(`${baseUrl}/shoe/delete`, param, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
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
