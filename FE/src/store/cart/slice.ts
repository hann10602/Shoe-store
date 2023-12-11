import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { cartAsyncAction } from "./action";
import { CartType } from "./type";

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
      .addCase(cartAsyncAction.getOne.rejected, (state, err: any) => {
        state.isGettingCart = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(cartAsyncAction.getAll.pending, (state) => {
        state.isGettingCarts = true;
      })
      .addCase(cartAsyncAction.getAll.fulfilled, (state, action) => {
        state.carts = action.payload;
        state.isGettingCarts = false;
      })
      .addCase(cartAsyncAction.getAll.rejected, (state, err: any) => {
        state.isGettingCarts = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(cartAsyncAction.getByUserId.pending, (state) => {
        state.isGettingCartsByUserId = true;
      })
      .addCase(cartAsyncAction.getByUserId.fulfilled, (state, action) => {
        state.cartsByUserId = action.payload;

        state.isGettingCartsByUserId = false;
      })
      .addCase(cartAsyncAction.getByUserId.rejected, (state, err: any) => {
        state.isGettingCartsByUserId = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(cartAsyncAction.create.pending, (state) => {
        state.isCreatingCart = true;
      })
      .addCase(cartAsyncAction.create.fulfilled, (state) => {
        state.isCreatingCart = false;
      })
      .addCase(cartAsyncAction.create.rejected, (state, err: any) => {
        state.isCreatingCart = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(cartAsyncAction.update.pending, (state) => {
        state.isUpdatingCart = true;
      })
      .addCase(cartAsyncAction.update.fulfilled, (state) => {
        state.isUpdatingCart = false;
      })
      .addCase(cartAsyncAction.update.rejected, (state, err: any) => {
        state.isUpdatingCart = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(cartAsyncAction.deletes.pending, (state) => {
        state.isDeletingCart = true;
      })
      .addCase(cartAsyncAction.deletes.fulfilled, (state) => {
        state.isDeletingCart = false;
      })
      .addCase(cartAsyncAction.deletes.rejected, (state, err: any) => {
        state.isDeletingCart = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
  },
});

export const cartReducer = cartSlice.reducer;
