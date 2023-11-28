import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { SizeQuantityType, SizeType } from "./type";
import { sizeAsyncAction } from "./action";
import { sizes } from "@/constants/size";

type SizeStateType = {
  isGettingSize: boolean;
  isGettingSizes: boolean;
  isGettingQuantity: boolean;
  isGettingSizesByShoeId: boolean;
  isCreatingSize: boolean;
  isUpdatingSize: boolean;
  isDeletingSize: boolean;
  quantity: SizeQuantityType | undefined;
  size: SizeType | undefined;
  sizes: SizeType[];
  sizesByShoeId: SizeType[];
  response: ResponseType | undefined;
};

const initialState: SizeStateType = {
  isGettingSize: false,
  isGettingSizes: false,
  isGettingQuantity: false,
  isGettingSizesByShoeId: false,
  isCreatingSize: false,
  isUpdatingSize: false,
  isDeletingSize: false,
  quantity: undefined,
  size: undefined,
  sizes: [],
  sizesByShoeId: [],
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
        throw new Error();
      });
    builder
      .addCase(sizeAsyncAction.getAll.pending, (state) => {
        state.isGettingSizes = true;
      })
      .addCase(sizeAsyncAction.getAll.fulfilled, (state, action) => {
        // state.sizes = action.payload;
        state.sizes = sizes;
        state.isGettingSizes = false;
      })
      .addCase(sizeAsyncAction.getAll.rejected, (state) => {
        state.isGettingSizes = false;
        throw new Error();
      });
    builder
      .addCase(sizeAsyncAction.getSizeQuantity.pending, (state) => {
        state.isGettingQuantity = true;
      })
      .addCase(sizeAsyncAction.getSizeQuantity.fulfilled, (state, action) => {
        state.quantity = action.payload;
        state.isGettingQuantity = false;
      })
      .addCase(sizeAsyncAction.getSizeQuantity.rejected, (state) => {
        state.isGettingQuantity = false;
        throw new Error();
      });
    builder
      .addCase(sizeAsyncAction.getByShoeId.pending, (state) => {
        state.isGettingSizesByShoeId = true;
      })
      .addCase(sizeAsyncAction.getByShoeId.fulfilled, (state, action) => {
        state.sizesByShoeId = action.payload;
        state.isGettingSizesByShoeId = false;
      })
      .addCase(sizeAsyncAction.getByShoeId.rejected, (state) => {
        state.isGettingSizesByShoeId = false;
        throw new Error();
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
        throw new Error();
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
        throw new Error();
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
        throw new Error();
      });
  },
});

export const sizeReducer = sizeSlice.reducer;
