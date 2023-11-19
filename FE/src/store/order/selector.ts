import { RootState } from "../store";

export const isGettingOrderSelector = (state: RootState) =>
  state.order.isGettingOrder;

export const isGettingOrdersSelector = (state: RootState) =>
  state.order.isGettingOrders;

export const isGettingOrdersByUserIdSelector = (state: RootState) =>
  state.order.isGettingOrdersByUserId;

export const isCreatingOrderSelector = (state: RootState) =>
  state.order.isCreatingOrder;

export const isUpdatingOrderSelector = (state: RootState) =>
  state.order.isUpdatingOrder;

export const isDeletingOrderSelector = (state: RootState) =>
  state.order.isDeletingOrder;

export const orderSelector = (state: RootState) => state.order.order;

export const ordersSelector = (state: RootState) => state.order.orders;

export const ordersByUserIdSelector = (state: RootState) =>
  state.order.ordersByUserId;

export const orderResponseSelector = (state: RootState) => state.order.response;
