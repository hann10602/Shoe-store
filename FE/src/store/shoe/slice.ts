import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { shoeAsyncAction } from "./action";
import { ShoeType } from "./type";

type ShoeStateType = {
  isGettingShoe: boolean;
  isGettingShoes: boolean;
  isGettingShoesByCategory1: boolean;
  isGettingShoesByCategory2: boolean;
  isGettingShoesByCategory3: boolean;
  isSearchShoes: boolean;
  isCreatingShoe: boolean;
  isUpdatingShoe: boolean;
  isDeletingShoe: boolean;
  shoe: ShoeType | undefined;
  shoes: ShoeType[];
  shoesByCategory1: ShoeType[];
  shoesByCategory2: ShoeType[];
  shoesByCategory3: ShoeType[];
  shoesSearch: ShoeType[];
  response: ResponseType | undefined;
};

const initialState: ShoeStateType = {
  isGettingShoe: false,
  isGettingShoes: false,
  isGettingShoesByCategory1: false,
  isGettingShoesByCategory2: false,
  isGettingShoesByCategory3: false,
  isSearchShoes: false,
  isCreatingShoe: false,
  isUpdatingShoe: false,
  isDeletingShoe: false,
  shoe: undefined,
  shoes: [],
  shoesByCategory1: [],
  shoesByCategory2: [],
  shoesByCategory3: [],
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
        state.shoe = action.payload;
        state.isGettingShoe = false;
      })
      .addCase(shoeAsyncAction.getOne.rejected, (state, err: any) => {
        state.isGettingShoe = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
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
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(shoeAsyncAction.getByCategory1.pending, (state) => {
        state.isGettingShoesByCategory1 = true;
      })
      .addCase(shoeAsyncAction.getByCategory1.fulfilled, (state, action) => {
        state.shoesByCategory1 = action.payload;
        state.isGettingShoesByCategory1 = false;
      })
      .addCase(shoeAsyncAction.getByCategory1.rejected, (state, err: any) => {
        state.isGettingShoesByCategory1 = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(shoeAsyncAction.getByCategory2.pending, (state) => {
        state.isGettingShoesByCategory2 = true;
      })
      .addCase(shoeAsyncAction.getByCategory2.fulfilled, (state, action) => {
        state.shoesByCategory2 = action.payload;
        state.isGettingShoesByCategory2 = false;
      })
      .addCase(shoeAsyncAction.getByCategory2.rejected, (state, err: any) => {
        state.isGettingShoesByCategory2 = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(shoeAsyncAction.getByCategory3.pending, (state) => {
        state.isGettingShoesByCategory3 = true;
      })
      .addCase(shoeAsyncAction.getByCategory3.fulfilled, (state, action) => {
        state.shoesByCategory3 = action.payload;
        state.isGettingShoesByCategory3 = false;
      })
      .addCase(shoeAsyncAction.getByCategory3.rejected, (state, err: any) => {
        state.isGettingShoesByCategory3 = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
    builder
      .addCase(shoeAsyncAction.searchShoes.pending, (state) => {
        state.isSearchShoes = true;
      })
      .addCase(shoeAsyncAction.searchShoes.fulfilled, (state, action) => {
        state.shoesSearch = action.payload;
        state.isSearchShoes = false;
      })
      .addCase(shoeAsyncAction.searchShoes.rejected, (state, err: any) => {
        state.isSearchShoes = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
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
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
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
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
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
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.response.request.response);
        }
      });
  },
});

export const shoeReducer = shoeSlice.reducer;
