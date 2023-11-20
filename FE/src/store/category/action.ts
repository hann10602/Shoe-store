import {
  CreateCategoryType,
  DeleteCategoryType,
  GetCategoryType,
  UpdateCategoryType,
} from "@/store/category/type";
import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk(
  "category/getOne",
  async (param: GetCategoryType) => {
    try {
      const resp = await axios.get(`${baseUrl}/category/self/${param.id}`, {
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

const getAll = createAsyncThunk("category/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/category/get-all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
      const resp = await axios.post(`${baseUrl}/category/create`, param, {
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
  "category/update",
  async (param: UpdateCategoryType) => {
    try {
      const resp = await axios.post(`${baseUrl}/category/update`, param, {
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
  "category/delete",
  async (param: DeleteCategoryType) => {
    try {
      const resp = await axios.post(`${baseUrl}/category/delete`, param, {
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

export const categoryAsyncAction = { getOne, getAll, create, update, deletes };
