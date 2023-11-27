import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateCartType,
  DeleteCartType,
  GetCartByUserIdType,
  GetCartType,
  OrderCartType,
  UpdateCartType,
} from "./type";
import { BASE_URL, getToken } from "@/utils";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk("cart/self", async (param: GetCartType, {rejectWithValue}) => {
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
});

const getAll = createAsyncThunk("cart/get-all", async (param, {rejectWithValue}) => {
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
});

const getByUserId = createAsyncThunk(
  "cart/getByUserId",
  async (params: GetCartByUserIdType, {rejectWithValue}) => {
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
  async (param: CreateCartType, {rejectWithValue}) => {
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
  async (param: UpdateCartType, {rejectWithValue}) => {
    try {
      const resp = await axios.post(`${baseUrl}/cart/update`, param, {
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
  async (param: DeleteCartType, {rejectWithValue}) => {
    try {
      const resp = await axios.post(`${baseUrl}/cart/delete`, param, {
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
