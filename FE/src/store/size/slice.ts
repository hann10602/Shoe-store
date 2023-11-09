import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { SizeType } from "./type";
import { sizeAsyncAction } from "./action";

type SizeStateType = {
  isGettingSize: boolean;
  isGettingSizes: boolean;
  isCreatingSize: boolean;
  isUpdatingSize: boolean;
  isDeletingSize: boolean;
  size: SizeType | undefined;
  sizes: SizeType[] | [];
  response: ResponseType | undefined;
};

const initialState: SizeStateType = {
  isGettingSize: false,
  isGettingSizes: false,
  isCreatingSize: false,
  isUpdatingSize: false,
  isDeletingSize: false,
  size: undefined,
  sizes: [],
  response: undefined,
};

const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sizeAsyncAction.getOne.pending, (state) => {
        state.isGettingSize = true;
      })
      .addCase(sizeAsyncAction.getOne.fulfilled, (state, action) => {
        state.size = action.payload;
        state.isGettingSize = false;
      })
      .addCase(sizeAsyncAction.getOne.rejected, (state) => {
        state.isGettingSize = false;
      });
    builder
      .addCase(sizeAsyncAction.getAll.pending, (state) => {
        state.isGettingSizes = true;
      })
      .addCase(sizeAsyncAction.getAll.fulfilled, (state, action) => {
        state.sizes = action.payload;
        state.isGettingSizes = false;
      })
      .addCase(sizeAsyncAction.getAll.rejected, (state) => {
        state.isGettingSizes = false;
      });
    builder
      .addCase(sizeAsyncAction.create.pending, (state) => {
        state.isCreatingSize = true;
      })
      .addCase(sizeAsyncAction.create.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingSize = false;
      })
      .addCase(sizeAsyncAction.create.rejected, (state) => {
        state.isCreatingSize = false;
      });
    builder
      .addCase(sizeAsyncAction.update.pending, (state) => {
        state.isUpdatingSize = true;
      })
      .addCase(sizeAsyncAction.update.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isUpdatingSize = false;
      })
      .addCase(sizeAsyncAction.update.rejected, (state) => {
        state.isUpdatingSize = false;
      });
    builder
      .addCase(sizeAsyncAction.deletes.pending, (state) => {
        state.isDeletingSize = true;
      })
      .addCase(sizeAsyncAction.deletes.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isDeletingSize = false;
      })
      .addCase(sizeAsyncAction.deletes.rejected, (state) => {
        state.isDeletingSize = false;
      });
  },
});

export const sizeReducer = sizeSlice.reducer;