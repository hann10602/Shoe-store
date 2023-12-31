import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { evaluateAsyncAction } from "./action";
import { EvaluateType } from "./type";

type EvaluateStateType = {
  isGettingEvaluate: boolean;
  isGettingEvaluates: boolean;
  isCreatingEvaluate: boolean;
  isUpdatingEvaluate: boolean;
  isDeletingEvaluate: boolean;
  evaluate: EvaluateType | undefined;
  evaluates: EvaluateType[];
  response: ResponseType | undefined;
};

const initialState: EvaluateStateType = {
  isGettingEvaluate: false,
  isGettingEvaluates: false,
  isCreatingEvaluate: false,
  isUpdatingEvaluate: false,
  isDeletingEvaluate: false,
  evaluate: undefined,
  evaluates: [],
  response: undefined,
};

const evaluateSlice = createSlice({
  name: "evaluate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(evaluateAsyncAction.getOne.pending, (state) => {
        state.isGettingEvaluate = true;
      })
      .addCase(evaluateAsyncAction.getOne.fulfilled, (state, action) => {
        state.evaluate = action.payload;
        state.isGettingEvaluate = false;
      })
      .addCase(evaluateAsyncAction.getOne.rejected, (state, err: any) => {
        state.isGettingEvaluate = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(evaluateAsyncAction.getByShoeId.pending, (state) => {
        state.isGettingEvaluates = true;
      })
      .addCase(evaluateAsyncAction.getByShoeId.fulfilled, (state, action) => {
        state.evaluates = action.payload;
        state.isGettingEvaluates = false;
      })
      .addCase(evaluateAsyncAction.getByShoeId.rejected, (state, err: any) => {
        state.isGettingEvaluates = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(evaluateAsyncAction.create.pending, (state) => {
        state.isCreatingEvaluate = true;
      })
      .addCase(evaluateAsyncAction.create.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingEvaluate = false;
      })
      .addCase(evaluateAsyncAction.create.rejected, (state, err: any) => {
        state.isCreatingEvaluate = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(evaluateAsyncAction.deletes.pending, (state) => {
        state.isDeletingEvaluate = true;
      })
      .addCase(evaluateAsyncAction.deletes.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isDeletingEvaluate = false;
      })
      .addCase(evaluateAsyncAction.deletes.rejected, (state, err: any) => {
        state.isDeletingEvaluate = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
  },
});

export const evaluateReducer = evaluateSlice.reducer;
