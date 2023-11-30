import {
  CreateCategoryType,
  DeleteCategoryType,
  GetCategoryType,
  UpdateCategoryType,
} from "@/store/category/type";
import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk(
  "category/self",
  async (param: GetCategoryType, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${baseUrl}/category/self/${param.id}`, {
        headers: { Authorization: `Bearer ${token.token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getAll = createAsyncThunk(
  "category/get-all",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${baseUrl}/category/get-all`);
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const create = createAsyncThunk(
  "category/create",
  async (param: CreateCategoryType, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`${baseUrl}/category/create`, param, {
        headers: { Authorization: `Bearer ${token.token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const update = createAsyncThunk(
  "category/update",
  async (param: UpdateCategoryType, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`${baseUrl}/category/update`, param, {
        headers: { Authorization: `Bearer ${token.token}` },
      });
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const deletes = createAsyncThunk(
  "category/delete",
  async (param: DeleteCategoryType, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(
        `${baseUrl}/category/delete/${param.id}`,
        {
          headers: { Authorization: `Bearer ${token.token}` },
        }
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const categoryAsyncAction = { getOne, getAll, create, update, deletes };
