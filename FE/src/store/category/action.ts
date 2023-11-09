import {
  CreateCategoryType,
  DeleteCategoryType,
  GetCategoryType,
  UpdateCategoryType,
} from "@/store/category/type";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = process.env.PUBLIC_URL;

const getOne = createAsyncThunk(
  "category/getOne",
  async (param: GetCategoryType) => {
    try {
      const resp = await axios.get(`${baseUrl}/category/self/${param.id}`);
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const getAll = createAsyncThunk("category/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/category/get-all`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const create = createAsyncThunk(
  "category/create",
  async (param: CreateCategoryType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/category/create`,
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
  "category/update",
  async (param: UpdateCategoryType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/category/update`,
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
  "category/delete",
  async (param: DeleteCategoryType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/category/delete`,
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

export const categoryAsyncAction = { getOne, getAll, create, update, deletes };
