import { RootState } from "../store";

export const isGettingShoeSelector = (state: RootState) =>
  state.shoe.isGettingShoe;

export const isGettingShoesSelector = (state: RootState) =>
  state.shoe.isGettingShoes;

export const isGettingShoesByCategory1Selector = (state: RootState) =>
  state.shoe.isGettingShoes;

export const isGettingShoesByCategory2Selector = (state: RootState) =>
  state.shoe.isGettingShoes;

export const isGettingShoesByCategory3Selector = (state: RootState) =>
  state.shoe.isGettingShoes;

export const isSearchShoesSelector = (state: RootState) =>
  state.shoe.isSearchShoes;

export const isCreatingShoeSelector = (state: RootState) =>
  state.shoe.isCreatingShoe;

export const isUpdatingShoeSelector = (state: RootState) =>
  state.shoe.isUpdatingShoe;

export const isDeletingShoeSelector = (state: RootState) =>
  state.shoe.isDeletingShoe;

export const shoeSelector = (state: RootState) => state.shoe.shoe;

export const shoesSelector = (state: RootState) => state.shoe.shoes;

export const shoesByCategory1Selector = (state: RootState) => state.shoe.shoesByCategory1;

export const shoesByCategory2Selector = (state: RootState) => state.shoe.shoesByCategory2;

export const shoesByCategory3Selector = (state: RootState) => state.shoe.shoesByCategory3;

export const shoesSearchSelector = (state: RootState) => state.shoe.shoesSearch;

export const shoeResponseSelector = (state: RootState) => state.shoe.response;
