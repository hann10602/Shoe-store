import { RootState } from "../store";

export const isGettingBillSelector = (state: RootState) =>
  state.bill.isGettingBill;

export const isGettingBillsSelector = (state: RootState) =>
  state.bill.isGettingBills;

export const isGettingBillsByUserIdSelector = (state: RootState) =>
  state.bill.isGettingBillsByUserId;

export const isCreatingBillSelector = (state: RootState) =>
  state.bill.isCreatingBill;

export const isUpdatingBillSelector = (state: RootState) =>
  state.bill.isUpdatingBill;

export const isDeletingBillSelector = (state: RootState) =>
  state.bill.isDeletingBill;

export const billSelector = (state: RootState) => state.bill.bill;

export const billsSelector = (state: RootState) => state.bill.bills;

export const billsByUserIdSelector = (state: RootState) =>
  state.bill.billsByUserId;

export const billResponseSelector = (state: RootState) => state.bill.response;
