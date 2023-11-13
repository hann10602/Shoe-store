import { RootState } from "../store";

export const isGettingShoeSelector = (state: RootState) =>
  state.shoe.isGettingShoe;

export const isGettingShoesSelector = (state: RootState) =>
  state.shoe.isGettingShoes;

export const isGettingCategoryShoesSelector = (state: RootState) =>
state.shoe.isGettingCategoryShoes;

export const isCreatingShoeSelector = (state: RootState) =>
  state.shoe.isCreatingShoe;

export const isUpdatingShoeSelector = (state: RootState) =>
  state.shoe.isUpdatingShoe;

export const isDeletingShoeSelector = (state: RootState) =>
  state.shoe.isDeletingShoe;

export const shoeSelector = (state: RootState) => state.shoe.shoe;

export const shoesSelector = (state: RootState) => state.shoe.shoes;

export const categoryShoesSelector = (state: RootState) => state.shoe.shoesByCategory;

export const shoeResponseSelector = (state: RootState) => state.shoe.response;
