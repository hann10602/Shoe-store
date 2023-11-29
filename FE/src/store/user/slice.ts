import { createSlice } from "@reduxjs/toolkit";
import { userAsyncAction } from "./action";
import { UserType } from "./type";

type UserStateType = {
  isGettingUser: boolean;
  isGettingUsers: boolean;
  isChangingPasswordUsers: boolean;
  isCreatingUser: boolean;
  isUpdatingUser: boolean;
  isDeletingUser: boolean;
  user: UserType | undefined;
  users: UserType[];
};

const initialState: UserStateType = {
  isGettingUser: false,
  isGettingUsers: false,
  isChangingPasswordUsers: false,
  isCreatingUser: false,
  isUpdatingUser: false,
  isDeletingUser: false,
  user: undefined,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userAsyncAction.getOne.pending, (state) => {
        state.isGettingUser = true;
      })
      .addCase(userAsyncAction.getOne.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isGettingUser = false;
      })
      .addCase(userAsyncAction.getOne.rejected, (state) => {
        state.isGettingUser = false;
        throw new Error();
      });
    builder
      .addCase(userAsyncAction.getAll.pending, (state) => {
        state.isGettingUsers = true;
      })
      .addCase(userAsyncAction.getAll.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isGettingUsers = false;
      })
      .addCase(userAsyncAction.getAll.rejected, (state) => {
        state.isGettingUsers = false;
        throw new Error();
      });
    builder
      .addCase(userAsyncAction.create.pending, (state) => {
        state.isCreatingUser = true;
      })
      .addCase(userAsyncAction.create.fulfilled, (state, action) => {
        state.isCreatingUser = false;
      })
      .addCase(userAsyncAction.create.rejected, (state) => {
        state.isCreatingUser = false;
        throw new Error();
      });
    builder
      .addCase(userAsyncAction.update.pending, (state) => {
        state.isUpdatingUser = true;
      })
      .addCase(userAsyncAction.update.fulfilled, (state, action) => {
        state.isUpdatingUser = false;
      })
      .addCase(userAsyncAction.update.rejected, (state) => {
        state.isUpdatingUser = false;
        throw new Error();
      });
    builder
      .addCase(userAsyncAction.changePassword.pending, (state) => {
        state.isChangingPasswordUsers = true;
      })
      .addCase(userAsyncAction.changePassword.fulfilled, (state) => {
        state.isChangingPasswordUsers = false;
      })
      .addCase(userAsyncAction.changePassword.rejected, (state) => {
        state.isChangingPasswordUsers = false;
        throw new Error();
      });
    builder
      .addCase(userAsyncAction.deletes.pending, (state) => {
        state.isDeletingUser = true;
      })
      .addCase(userAsyncAction.deletes.fulfilled, (state, action) => {
        state.isDeletingUser = false;
      })
      .addCase(userAsyncAction.deletes.rejected, (state) => {
        state.isDeletingUser = false;
        throw new Error();
      });
  },
});

export const userReducer = userSlice.reducer;