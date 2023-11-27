import { BASE_URL, getToken } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CreateEvaluateType,
  DeleteEvaluateType,
  GetEvaluateType,
  GetEvaluatesByShoeIdType,
} from "./type";

const baseUrl = BASE_URL;
const token = getToken();

const getOne = createAsyncThunk(
  "evaluate/self",
  async (param: GetEvaluateType, {rejectWithValue}) => {
    try {
      const resp = await axios.get(`${baseUrl}/evaluate/self/${param.id}`, {
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

const getByShoeId = createAsyncThunk(
  "evaluate/getByShoeId",
  async (param: GetEvaluatesByShoeIdType, {rejectWithValue}) => {
    try {
      const resp = await axios.get(
        `${baseUrl}/evaluate/get-by-shoe-id/${param.shoeId}`
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
  "evaluate/create",
  async (param: CreateEvaluateType, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`${baseUrl}/evaluate/create`, param, {
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
  "evaluate/delete",
  async (param: DeleteEvaluateType, {rejectWithValue}) => {
    try {
      const resp = await axios.post(`${baseUrl}/evaluate/delete`, param, {
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

export const evaluateAsyncAction = { getOne, getByShoeId, create, deletes };
