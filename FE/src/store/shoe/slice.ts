import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { ShoeType } from "./type";
import { shoeAsyncAction } from "./action";
import { products } from "@/constants/shoe";

type ShoeStateType = {
  isGettingShoe: boolean;
  isGettingShoes: boolean;
  isSearchShoes: boolean;
  isCreatingShoe: boolean;
  isUpdatingShoe: boolean;
  isDeletingShoe: boolean;
  shoe: ShoeType | undefined;
  shoes: ShoeType[];
  shoesSearch: ShoeType[];
  response: ResponseType | undefined;
};

const initialState: ShoeStateType = {
  isGettingShoe: false,
  isGettingShoes: false,
  isSearchShoes: false,
  isCreatingShoe: false,
  isUpdatingShoe: false,
  isDeletingShoe: false,
  shoe: undefined,
  shoes: [],
  shoesSearch: [],
  response: undefined,
};

const shoeSlice = createSlice({
  name: "shoe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shoeAsyncAction.getOne.pending, (state) => {
        state.isGettingShoe = true;
      })
      .addCase(shoeAsyncAction.getOne.fulfilled, (state, action) => {
        // state.shoe = action.payload;
        state.shoe = products[0];
        state.isGettingShoe = false;
      })
      .addCase(shoeAsyncAction.getOne.rejected, (state) => {
        state.isGettingShoe = false;
      });
    builder
      .addCase(shoeAsyncAction.getAll.pending, (state) => {
        state.isGettingShoes = true;
      })
      .addCase(shoeAsyncAction.getAll.fulfilled, (state, action) => {
        // state.shoes = action.payload;
        state.shoes = products;
        state.isGettingShoes = false;
      })
      .addCase(shoeAsyncAction.getAll.rejected, (state) => {
        state.isGettingShoes = false;
      });
    builder
      .addCase(shoeAsyncAction.searchShoes.pending, (state) => {
        state.isSearchShoes = true;
      })
      .addCase(shoeAsyncAction.searchShoes.fulfilled, (state, action) => {
        // state.shoesByCategory = action.payload;
        state.shoesSearch = products;
        state.isSearchShoes = false;
      })
      .addCase(shoeAsyncAction.searchShoes.rejected, (state) => {
        state.isSearchShoes = false;
      });
    builder
      .addCase(shoeAsyncAction.create.pending, (state) => {
        state.isCreatingShoe = true;
      })
      .addCase(shoeAsyncAction.create.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingShoe = false;
      })
      .addCase(shoeAsyncAction.create.rejected, (state) => {
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
      .addCase(shoeAsyncAction.update.rejected, (state) => {
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
      .addCase(shoeAsyncAction.deletes.rejected, (state) => {
        state.isDeletingShoe = false;
      });
  },
});

export const shoeReducer = shoeSlice.reducer;
