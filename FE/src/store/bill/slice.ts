import { bills } from "@/constants/bill";
import { createSlice } from "@reduxjs/toolkit";
import { ResponseType } from "../type";
import { billAsyncAction } from "./action";
import { BillType } from "./type";

type BillStateType = {
  isGettingBill: boolean;
  isGettingBills: boolean;
  isGettingBillsByUserId: boolean;
  isCreatingBill: boolean;
  isUpdatingBill: boolean;
  isDeletingBill: boolean;
  bill: BillType | undefined;
  bills: BillType[];
  billsByUserId: BillType[];
  response: ResponseType | undefined;
};

const initialState: BillStateType = {
  isGettingBill: false,
  isGettingBills: false,
  isGettingBillsByUserId: false,
  isCreatingBill: false,
  isUpdatingBill: false,
  isDeletingBill: false,
  bill: undefined,
  bills: [],
  billsByUserId: [],
  response: undefined,
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(billAsyncAction.getOne.pending, (state) => {
        state.isGettingBill = true;
      })
      .addCase(billAsyncAction.getOne.fulfilled, (state, action) => {
        state.bill = action.payload;
        state.isGettingBill = false;
      })
      .addCase(billAsyncAction.getOne.rejected, (state) => {
        state.isGettingBill = false;
      });
    builder
      .addCase(billAsyncAction.getAll.pending, (state) => {
        state.isGettingBills = true;
      })
      .addCase(billAsyncAction.getAll.fulfilled, (state, action) => {
        // state.bills = action.payload;
        state.bills = bills;

        state.isGettingBills = false;
      })
      .addCase(billAsyncAction.getAll.rejected, (state) => {
        state.isGettingBills = false;
      });
    builder
      .addCase(billAsyncAction.getByUserId.pending, (state) => {
        state.isGettingBillsByUserId = true;
      })
      .addCase(billAsyncAction.getByUserId.fulfilled, (state, action) => {
        // state.billsByUserId = action.payload;
        state.billsByUserId = bills;

        state.isGettingBillsByUserId = false;
      })
      .addCase(billAsyncAction.getByUserId.rejected, (state) => {
        state.isGettingBillsByUserId = false;
      });
    builder
      .addCase(billAsyncAction.create.pending, (state) => {
        state.isCreatingBill = true;
      })
      .addCase(billAsyncAction.create.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingBill = false;
      })
      .addCase(billAsyncAction.create.rejected, (state) => {
        state.isCreatingBill = false;
      });
    builder
      .addCase(billAsyncAction.createFromCart.pending, (state) => {
        state.isCreatingBill = true;
      })
      .addCase(billAsyncAction.createFromCart.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isCreatingBill = false;
      })
      .addCase(billAsyncAction.createFromCart.rejected, (state) => {
        state.isCreatingBill = false;
      });
    builder
      .addCase(billAsyncAction.update.pending, (state) => {
        state.isUpdatingBill = true;
      })
      .addCase(billAsyncAction.update.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isUpdatingBill = false;
      })
      .addCase(billAsyncAction.update.rejected, (state) => {
        state.isUpdatingBill = false;
      });
    builder
      .addCase(billAsyncAction.deletes.pending, (state) => {
        state.isDeletingBill = true;
      })
      .addCase(billAsyncAction.deletes.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isDeletingBill = false;
      })
      .addCase(billAsyncAction.deletes.rejected, (state) => {
        state.isDeletingBill = false;
      });
  },
});

export const billReducer = billSlice.reducer;
