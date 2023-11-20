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
        localStorage.setItem("login-user", JSON.stringify(action.payload));

        state.isLogin = false;
      })
      .addCase(authAsyncAction.login.rejected, (state, action) => {
        state.isLogin = false;
        throw new Error(action.payload as string);
      });
    builder
      .addCase(authAsyncAction.register.pending, (state) => {
        state.isRegister = true;
      })
      .addCase(authAsyncAction.register.fulfilled, (state, action) => {
        state.isRegister = false;
      })
      .addCase(authAsyncAction.register.rejected, (state, action) => {
        state.isRegister = false;
        throw new Error(action.payload as string);
      });
  },
});

export const authReducer = authSlice.reducer;
