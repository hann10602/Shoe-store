import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateEvaluateType,
  DeleteEvaluateType,
  GetEvaluateType,
  GetEvaluatesByShoeIdType,
} from "./type";
import { BASE_URL, getToken } from "@/utils";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk(
  "evaluate/getOne",
  async (param: GetEvaluateType) => {
    try {
      const resp = await axios.get(`${baseUrl}/evaluate/self/${param.id}`, {
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

const getByShoeId = createAsyncThunk(
  "evaluate/getByShoeId",
  async (param: GetEvaluatesByShoeIdType) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/evaluate/get-by-shoe-id?${param.shoeId}`,
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
  "evaluate/create",
  async (param: CreateEvaluateType) => {
    try {
      const resp = await axios.post(`${baseUrl}/evaluate/create`, param, {
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
  "evaluate/delete",
  async (param: DeleteEvaluateType) => {
    try {
      const resp = await axios.post(`${baseUrl}/evaluate/delete`, param, {
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

export const evaluateAsyncAction = { getOne, getByShoeId, create, deletes };
