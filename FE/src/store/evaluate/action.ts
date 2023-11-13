import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateEvaluateType,
  DeleteEvaluateType,
  GetEvaluateType,
  GetEvaluatesByShoeIdType
} from "./type";

const baseUrl = process.env.PUBLIC_URL;

const getOne = createAsyncThunk("evaluate/getOne", async (param: GetEvaluateType) => {
  try {
    const resp = await axios.get(`${baseUrl}/evaluate/self/${param.id}`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const getByShoeId = createAsyncThunk("evaluate/getByShoeId", async (param: GetEvaluatesByShoeIdType) => {
  try {
    const resp = await axios.get(`${baseUrl}/evaluate/get-by-shoe-id?${param.shoeId}`);
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (err) {
    return isRejectedWithValue(err);
  }
});

const create = createAsyncThunk(
  "evaluate/create",
  async (param: CreateEvaluateType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/evaluate/create`,
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
  "evaluate/delete",
  async (param: DeleteEvaluateType) => {
    try {
      const resp = await axios.post(
        `${baseUrl}/evaluate/delete`,
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

export const evaluateAsyncAction = { getOne, getByShoeId, create, deletes };
