import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateCartType,
  DeleteCartType,
  GetCartType,
  UpdateCartType,
} from "./type";

const baseUrl = process.env.PUBLIC_URL;

const getOne = createAsyncThunk("size/getOne", async (param: GetCartType) => {
  try {
    const resp = await axios.get(`${baseUrl}/cart/self/${param.id}`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("cart/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/cart/get-all`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const create = createAsyncThunk(
  "cart/create",
  async (param: CreateCartType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/cart/create`,
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
  "cart/update",
  async (param: UpdateCartType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/cart/update`,
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
  "cart/delete",
  async (param: DeleteCartType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/cart/delete`,
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

export const cartAsyncAction = { getOne, getAll, create, update, deletes };
