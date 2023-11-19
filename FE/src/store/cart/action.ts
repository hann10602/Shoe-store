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

const getOne = createAsyncThunk("cart/getOne", async (param: GetCartType) => {
  try {
    const resp = await axios.get(`${baseUrl}/cart/self/${param.id}`,
        { headers: { Authorization: `Bearer ${token}` } });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("cart/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/cart/get-all`,
        { headers: { Authorization: `Bearer ${token}` } });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getByUserId = createAsyncThunk("cart/getByUserId", async (params: GetCartByUserIdType) => {
  try {
    const resp = await axios.get(`${baseUrl}/cart/get-by-user-id/${params.userId}`,
        { headers: { Authorization: `Bearer ${token}` } });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const order = createAsyncThunk(
  "cart/order",
  async (param: OrderCartType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/cart/order`,
        JSON.stringify(param),
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
  "cart/create",
  async (param: CreateCartType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/cart/create`,
        JSON.stringify(param),
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

const update = createAsyncThunk(
  "cart/update",
  async (param: UpdateCartType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/cart/update`,
        JSON.stringify(param),
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

const deletes = createAsyncThunk(
  "cart/delete",
  async (param: DeleteCartType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/cart/delete`,
        JSON.stringify(param),
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

export const cartAsyncAction = { getOne, getAll, getByUserId, order, create, update, deletes };
