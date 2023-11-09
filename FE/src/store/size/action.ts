import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { CreateSizeType, DeleteSizeType, GetSizeType, UpdateSizeType } from "./type";

const baseUrl = process.env.PUBLIC_URL;

const getOne = createAsyncThunk(
  "size/getOne",
  async (param: GetSizeType) => {
    try {
      const resp = await axios.get(`${baseUrl}/size/self/${param.id}`);
      if (resp.status === 200) {
        return resp.data;
      }
    } catch (err) {
      return isRejectedWithValue(err);
    }
  }
);

const getAll = createAsyncThunk("size/getAll", async () => {
  try {
    const resp = await axios.get(`${baseUrl}/size/get-all`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const create = createAsyncThunk(
  "size/create",
  async (param: CreateSizeType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/size/create`,
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
  "size/update",
  async (param: UpdateSizeType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/size/update`,
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
  "size/delete",
  async (param: DeleteSizeType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/size/delete`,
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

export const sizeAsyncAction = { getOne, getAll, create, update, deletes };
