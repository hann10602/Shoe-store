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
      .addCase(sizeAsyncAction.getOne.rejected, (state, err: any) => {
        state.isGettingSize = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
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
      .addCase(sizeAsyncAction.getAll.rejected, (state, err: any) => {
        state.isGettingSizes = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(sizeAsyncAction.getSizeQuantity.pending, (state) => {
        state.isGettingQuantity = true;
      })
      .addCase(sizeAsyncAction.getSizeQuantity.fulfilled, (state, action) => {
        state.quantity = action.payload;
        state.isGettingQuantity = false;
      })
      .addCase(sizeAsyncAction.getSizeQuantity.rejected, (state, err: any) => {
        state.isGettingQuantity = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(sizeAsyncAction.getByShoeId.pending, (state) => {
        state.isGettingSizesByShoeId = true;
      })
      .addCase(sizeAsyncAction.getByShoeId.fulfilled, (state, action) => {
        state.sizesByShoeId = action.payload;
        state.isGettingSizesByShoeId = false;
      })
      .addCase(sizeAsyncAction.getByShoeId.rejected, (state, err: any) => {
        state.isGettingSizesByShoeId = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(sizeAsyncAction.create.pending, (state) => {
        state.isCreatingSize = true;
      })
      .addCase(sizeAsyncAction.create.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingSize = false;
      })
      .addCase(sizeAsyncAction.create.rejected, (state, err: any) => {
        state.isCreatingSize = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(sizeAsyncAction.update.pending, (state) => {
        state.isUpdatingSize = true;
      })
      .addCase(sizeAsyncAction.update.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isUpdatingSize = false;
      })
      .addCase(sizeAsyncAction.update.rejected, (state, err: any) => {
        state.isUpdatingSize = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(sizeAsyncAction.deletes.pending, (state) => {
        state.isDeletingSize = true;
      })
      .addCase(sizeAsyncAction.deletes.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isDeletingSize = false;
      })
      .addCase(sizeAsyncAction.deletes.rejected, (state, err: any) => {
        state.isDeletingSize = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
  },
});

export const sizeReducer = sizeSlice.reducer;
