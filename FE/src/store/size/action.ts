import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateSizeType,
  DeleteSizeType,
  GetQuantityType,
  GetSizeByShoeIdType,
  GetSizeType,
  UpdateSizeType,
} from "./type";
import { BASE_URL, getToken } from "@/utils";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk(
  "size/self",
  async (param: GetSizeType, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${baseUrl}/size/self/${param.id}`, {
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
  "size/get-all",
  async (param, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${baseUrl}/size/get-all`, {});
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getSizeQuantity = createAsyncThunk(
  "size/get-quantity",
  async (param: GetQuantityType, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/size/get-quantity?shoeId=${param.shoeId}&sizeCode=${param.sizeCode}`
      );
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const getByShoeId = createAsyncThunk(
  "size/getByShoeId",
  async (params: GetSizeByShoeIdType, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/size/get-by-shoe-id/${params.shoeId}`,
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
  "size/create",
  async (param: CreateSizeType, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`${baseUrl}/size/create`, param, {
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
  "size/update",
  async (param: UpdateSizeType, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`${baseUrl}/size/update`, param, {
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
  "size/delete",
  async (param: DeleteSizeType, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`${baseUrl}/size/delete/${param.id}`, {
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

export const sizeAsyncAction = {
  getOne,
  getAll,
  getByShoeId,
  getSizeQuantity,
  create,
  update,
  deletes,
};
