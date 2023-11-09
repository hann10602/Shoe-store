import { RootState } from "../store";

export const isGettingCartSelector = (state: RootState) =>
  state.cart.isGettingCart;

export const isGettingCartsSelector = (state: RootState) =>
  state.cart.isGettingCarts;

export const isCreatingCartSelector = (state: RootState) =>
  state.cart.isCreatingCart;

export const isUpdatingCartSelector = (state: RootState) =>
  state.cart.isUpdatingCart;

export const isDeletingCartSelector = (state: RootState) =>
  state.cart.isDeletingCart;

export const cartSelector = (state: RootState) => state.cart.cart;

export const cartsSelector = (state: RootState) => state.cart.carts;

export const cartResponseSelector = (state: RootState) => state.cart.response;
