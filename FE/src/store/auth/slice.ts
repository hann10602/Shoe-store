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
      .addCase(authAsyncAction.login.rejected, (state, err: any) => {
        state.isLogin = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.code as string);
        }
      });
    builder
      .addCase(authAsyncAction.register.pending, (state) => {
        state.isRegister = true;
      })
      .addCase(authAsyncAction.register.fulfilled, (state) => {
        state.isRegister = false;
      })
      .addCase(authAsyncAction.register.rejected, (state, err: any) => {
        state.isRegister = false;
        if (err.payload.code === "ERR_NETWORK") {
          localStorage.removeItem("jwt");
          throw new Error(err.payload.code as string);
        } else {
          throw new Error(err.payload.code as string);
        }
      });
  },
});

export const authReducer = authSlice.reducer;
