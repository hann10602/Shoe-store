import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { ShoeType } from "../shoe/type";
import { shoeAsyncAction } from "../shoe/action";

type ShoeStateType = {
  isGettingShoe: boolean;
  isGettingShoes: boolean;
  isCreatingShoe: boolean;
  isUpdatingShoe: boolean;
  isDeletingShoe: boolean;
  shoe: ShoeType | undefined;
  shoes: ShoeType[];
  response: ResponseType | undefined;
};

const initialState: ShoeStateType = {
  isGettingShoe: false,
  isGettingShoes: false,
  isCreatingShoe: false,
  isUpdatingShoe: false,
  isDeletingShoe: false,
  shoe: undefined,
  shoes: [],
  response: undefined,
};

const shoeSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shoeAsyncAction.getOne.pending, (state) => {
        state.isGettingShoe = true;
      })
      .addCase(shoeAsyncAction.getOne.fulfilled, (state, action) => {
        state.shoe = action.payload;
        state.isGettingShoe = false;
      })
      .addCase(shoeAsyncAction.getOne.rejected, (state, err: any) => {
        state.isGettingShoe = false;
      });
    builder
      .addCase(shoeAsyncAction.getAll.pending, (state) => {
        state.isGettingShoes = true;
      })
      .addCase(shoeAsyncAction.getAll.fulfilled, (state, action) => {
        state.shoes = action.payload;
        state.isGettingShoes = false;
      })
      .addCase(shoeAsyncAction.getAll.rejected, (state, err: any) => {
        state.isGettingShoes = false;
      });
    builder
      .addCase(shoeAsyncAction.create.pending, (state) => {
        state.isCreatingShoe = true;
      })
      .addCase(shoeAsyncAction.create.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingShoe = false;
      })
      .addCase(shoeAsyncAction.create.rejected, (state, err: any) => {
        state.isCreatingShoe = false;
      });
    builder
      .addCase(shoeAsyncAction.update.pending, (state) => {
        state.isUpdatingShoe = true;
      })
      .addCase(shoeAsyncAction.update.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isUpdatingShoe = false;
      })
      .addCase(shoeAsyncAction.update.rejected, (state, err: any) => {
        state.isUpdatingShoe = false;
      });
    builder
      .addCase(shoeAsyncAction.deletes.pending, (state) => {
        state.isDeletingShoe = true;
      })
      .addCase(shoeAsyncAction.deletes.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isDeletingShoe = false;
      })
      .addCase(shoeAsyncAction.deletes.rejected, (state, err: any) => {
        state.isDeletingShoe = false;
      });
  },
});

export const shoeReducer = shoeSlice.reducer;
