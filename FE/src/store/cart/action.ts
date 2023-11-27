import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateCartType,
  DeleteCartType,
  GetCartByUserIdType,
  GetCartType,
  UpdateCartType
} from "./type";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk(
  "cart/self",
  async (param: GetCartType, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${baseUrl}/cart/self/${param.id}`, {
        headers: { Authorization: `Bearer ${token}` },
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
  "cart/getAll",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${baseUrl}/cart/get-all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        return resp.data;
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
      const resp = await axios.get(
        `${baseUrl}/cart/get-by-user-id/${params.userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (resp.status === 200) {
        return resp.data;
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
      const resp = await axios.post(`${baseUrl}/cart/create`, param, {
        headers: { Authorization: `Bearer ${token}` },
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
  "cart/update",
  async (param: UpdateCartType, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`${baseUrl}/cart/update`, param, {
        headers: { Authorization: `Bearer ${token}` },
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
  "cart/delete",
  async (param: DeleteCartType, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`${baseUrl}/cart/delete/${param.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        return resp.data;
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
