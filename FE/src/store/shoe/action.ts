import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateShoeType,
  DeleteShoeType,
  GetShoeType,
  SearchShoes,
  UpdateShoeType,
} from "./type";

const baseUrl = process.env.PUBLIC_URL;

const getOne = createAsyncThunk("size/getOne", async (param: GetShoeType) => {
  try {
    const resp = await axios.get(`${baseUrl}/shoe/self?id=${param.id}`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("shoe/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/shoe/get-all`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

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
        ${param.priceTo && `&price-to=${param.priceTo}`}`
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
      const resp = await axios.post(
        `${baseUrl}/shoe/create`,
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
  "shoe/update",
  async (param: UpdateShoeType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/shoe/update`,
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
  "shoe/delete",
  async (param: DeleteShoeType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/shoe/delete`,
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

export const shoeAsyncAction = {
  getOne,
  getAll,
  searchShoes,
  create,
  update,
  deletes,
};
