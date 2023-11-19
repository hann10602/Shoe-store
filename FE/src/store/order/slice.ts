import { orders } from "@/constants/order";
import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { orderAsyncAction } from "./action";
import { OrderType } from "./type";

type OrderStateType = {
  isGettingOrder: boolean;
  isGettingOrders: boolean;
  isGettingOrdersByUserId: boolean;
  isCreatingOrder: boolean;
  isUpdatingOrder: boolean;
  isDeletingOrder: boolean;
  order: OrderType | undefined;
  orders: OrderType[];
  ordersByUserId: OrderType[];
  response: ResponseType | undefined;
};

const initialState: OrderStateType = {
  isGettingOrder: false,
  isGettingOrders: false,
  isGettingOrdersByUserId: false,
  isCreatingOrder: false,
  isUpdatingOrder: false,
  isDeletingOrder: false,
  order: undefined,
  orders: [],
  ordersByUserId: [],
  response: undefined,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(orderAsyncAction.getOne.pending, (state) => {
        state.isGettingOrder = true;
      })
      .addCase(orderAsyncAction.getOne.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isGettingOrder = false;
      })
      .addCase(orderAsyncAction.getOne.rejected, (state) => {
        state.isGettingOrder = false;
      });
    builder
      .addCase(orderAsyncAction.getAll.pending, (state) => {
        state.isGettingOrders = true;
      })
      .addCase(orderAsyncAction.getAll.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.isGettingOrders = false;
      })
      .addCase(orderAsyncAction.getAll.rejected, (state) => {
        state.isGettingOrders = false;
      });
    builder
      .addCase(orderAsyncAction.getByUserId.pending, (state) => {
        state.isGettingOrdersByUserId = true;
      })
      .addCase(orderAsyncAction.getByUserId.fulfilled, (state, action) => {
        // state.ordersByUserId = action.payload;
        state.ordersByUserId = orders;

        state.isGettingOrdersByUserId = false;
      })
      .addCase(orderAsyncAction.getByUserId.rejected, (state) => {
        state.isGettingOrdersByUserId = false;
      });
    builder
      .addCase(orderAsyncAction.create.pending, (state) => {
        state.isCreatingOrder = true;
      })
      .addCase(orderAsyncAction.create.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingOrder = false;
      })
      .addCase(orderAsyncAction.create.rejected, (state) => {
        state.isCreatingOrder = false;
      });
    builder
      .addCase(orderAsyncAction.update.pending, (state) => {
        state.isUpdatingOrder = true;
      })
      .addCase(orderAsyncAction.update.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isUpdatingOrder = false;
      })
      .addCase(orderAsyncAction.update.rejected, (state) => {
        state.isUpdatingOrder = false;
      });
    builder
      .addCase(orderAsyncAction.deletes.pending, (state) => {
        state.isDeletingOrder = true;
      })
      .addCase(orderAsyncAction.deletes.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isDeletingOrder = false;
      })
      .addCase(orderAsyncAction.deletes.rejected, (state) => {
        state.isDeletingOrder = false;
      });
  },
});

export const orderReducer = orderSlice.reducer;
