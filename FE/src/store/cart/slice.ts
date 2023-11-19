import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { cartAsyncAction } from "./action";
import { CartType } from "./type";
import { carts } from "@/constants/cart";

type CartStateType = {
  isGettingCart: boolean;
  isGettingCarts: boolean;
  isGettingCartsByUserId: boolean;
  isCreatingCart: boolean;
  isUpdatingCart: boolean;
  isDeletingCart: boolean;
  cart: CartType | undefined;
  carts: CartType[];
  cartsByUserId: CartType[];
  response: ResponseType | undefined;
};

const initialState: CartStateType = {
  isGettingCart: false,
  isGettingCarts: false,
  isGettingCartsByUserId: false,
  isCreatingCart: false,
  isUpdatingCart: false,
  isDeletingCart: false,
  cart: undefined,
  carts: [],
  cartsByUserId: [],
  response: undefined,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cartAsyncAction.getOne.pending, (state) => {
        state.isGettingCart = true;
      })
      .addCase(cartAsyncAction.getOne.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.isGettingCart = false;
      })
      .addCase(cartAsyncAction.getOne.rejected, (state) => {
        state.isGettingCart = false;
      });
    builder
      .addCase(cartAsyncAction.getAll.pending, (state) => {
        state.isGettingCarts = true;
      })
      .addCase(cartAsyncAction.getAll.fulfilled, (state, action) => {
        state.carts = action.payload;
        state.isGettingCarts = false;
      })
      .addCase(cartAsyncAction.getAll.rejected, (state) => {
        state.isGettingCarts = false;
      });
    builder
      .addCase(cartAsyncAction.getByUserId.pending, (state) => {
        state.isGettingCartsByUserId = true;
      })
      .addCase(cartAsyncAction.getByUserId.fulfilled, (state, action) => {
        // state.cartsByUserId = action.payload;
        state.cartsByUserId = carts;

        state.isGettingCartsByUserId = false;
      })
      .addCase(cartAsyncAction.getByUserId.rejected, (state) => {
        state.isGettingCartsByUserId = false;
      });
    builder
      .addCase(cartAsyncAction.create.pending, (state) => {
        state.isCreatingCart = true;
      })
      .addCase(cartAsyncAction.create.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingCart = false;
      })
      .addCase(cartAsyncAction.create.rejected, (state) => {
        state.isCreatingCart = false;
      });
    builder
      .addCase(cartAsyncAction.update.pending, (state) => {
        state.isUpdatingCart = true;
      })
      .addCase(cartAsyncAction.update.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isUpdatingCart = false;
      })
      .addCase(cartAsyncAction.update.rejected, (state) => {
        state.isUpdatingCart = false;
      });
    builder
      .addCase(cartAsyncAction.deletes.pending, (state) => {
        state.isDeletingCart = true;
      })
      .addCase(cartAsyncAction.deletes.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isDeletingCart = false;
      })
      .addCase(cartAsyncAction.deletes.rejected, (state) => {
        state.isDeletingCart = false;
      });
  },
});

export const cartReducer = cartSlice.reducer;
