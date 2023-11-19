import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { CreateOrderType, DeleteOrderType, GetOrderByUserIdType, GetOrderType, UpdateOrderType } from "./type";

const baseUrl = process.env.PUBLIC_URL;

const getOne = createAsyncThunk("order/getOne", async (param: GetOrderType) => {
  try {
    const resp = await axios.get(`${baseUrl}/order/self/${param.id}`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("order/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/order/get-all`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getByUserId = createAsyncThunk(
  "order/getByUserId",
  async (params: GetOrderByUserIdType) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/order/get-by-user-id/${params.userId}`
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
  "order/create",
  async (param: CreateOrderType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/order/create`,
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
  "order/update",
  async (param: UpdateOrderType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/order/update`,
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
  "order/delete",
  async (param: DeleteOrderType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/order/delete`,
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

export const orderAsyncAction = {
  getOne,
  getAll,
  getByUserId,
  create,
  update,
  deletes,
};
