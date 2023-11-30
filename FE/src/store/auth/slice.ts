import { createSlice } from "@reduxjs/toolkit";
import { authAsyncAction } from "./action";

type AuthStateType = {
  isRegister: boolean;
  isLogin: boolean;
};

const initialState: AuthStateType = {
  isRegister: false,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authAsyncAction.login.pending, (state) => {
        state.isLogin = true;
      })
      .addCase(authAsyncAction.login.fulfilled, (state, action) => {
        localStorage.setItem("jwt", JSON.stringify(action.payload));

        state.isLogin = false;
      })
      .addCase(authAsyncAction.login.rejected, (state) => {
        state.isLogin = false;
        throw new Error();
      });
    builder
      .addCase(authAsyncAction.register.pending, (state) => {
        state.isRegister = true;
      })
      .addCase(authAsyncAction.register.fulfilled, (state) => {
        state.isRegister = false;
      })
      .addCase(authAsyncAction.register.rejected, (state) => {
        state.isRegister = false;
        throw new Error();
      });
  },
});

export const authReducer = authSlice.reducer;
