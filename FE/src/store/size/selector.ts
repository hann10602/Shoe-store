import { RootState } from "../store";

export const isGettingSizeSelector = (state: RootState) =>
  state.size.isGettingSize;

export const isGettingSizesSelector = (state: RootState) =>
  state.size.isGettingSizes;

export const isCreatingSizeSelector = (state: RootState) =>
  state.size.isCreatingSize;

export const isUpdatingSizeSelector = (state: RootState) =>
  state.size.isUpdatingSize;

export const isDeletingSizeSelector = (state: RootState) =>
  state.size.isDeletingSize;

export const sizeSelector = (state: RootState) => state.size.size;

export const sizesSelector = (state: RootState) => state.size.sizes;

export const sizeResponseSelector = (state: RootState) => state.size.response;