import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateBillType,
  DeleteBillType,
  GetBillByUserIdType,
  GetBillType,
  UpdateBillType,
} from "./type";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk("bill/self", async (param: GetBillType) => {
  try {
    const resp = await axios.get(`${baseUrl}/bill/self/${param.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getAll = createAsyncThunk("bill/get-all", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/bill/get-all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getByUserId = createAsyncThunk(
  "bill/getByUserId",
  async (params: GetBillByUserIdType) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/bill/get-by-user-id/${params.userId}`,
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
  "bill/create",
  async (param: CreateBillType) => {
    try {
      const resp = await axios.post(`${baseUrl}/bill/create`, param, {
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
  "bill/update",
  async (param: UpdateBillType) => {
    try {
      const resp = await axios.post(`${baseUrl}/bill/update`, param, {
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
  "bill/delete",
  async (param: DeleteBillType) => {
    try {
      const resp = await axios.post(`${baseUrl}/bill/delete`, param, {
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

export const billAsyncAction = {
  getOne,
  getAll,
  getByUserId,
  create,
  update,
  deletes,
};
