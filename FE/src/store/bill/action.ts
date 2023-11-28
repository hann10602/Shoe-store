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

const getOne = createAsyncThunk(
  "bill/self",
  async (param: GetBillType, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${baseUrl}/bill/self/${param.id}`, {
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
  "bill/getAll",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${baseUrl}/bill/get-all`, {
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
  "bill/getByUserId",
  async (params: GetBillByUserIdType, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/bill/get-by-user-id/${params.userId}`,
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
  "bill/create",
  async (param: CreateBillType, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`${baseUrl}/bill/create`, param, {
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

const createFromCart = createAsyncThunk(
  "bill/createFromCart",
  async (param: CreateBillFromCartType, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`${baseUrl}/bill/create-from-cart`, param, {
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
  "bill/update",
  async (param: UpdateBillType, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`${baseUrl}/bill/update`, param, {
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
  "bill/delete",
  async (param: DeleteBillType, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`${baseUrl}/bill/delete/${param.id}`, {
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

export const billAsyncAction = {
  getOne,
  getAll,
  getByUserId,
  create,
  createFromCart,
  update,
  deletes,
};
