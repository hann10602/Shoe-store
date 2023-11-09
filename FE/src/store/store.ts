import { combineReducers } from "redux";
import { categoryReducer } from "./category/slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { sizeReducer } from "./size/slice";
import { cartReducer } from "./cart/slice";
import { userReducer } from "./user/slice";
import { shoeReducer } from "./shoe/slice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    size: sizeReducer,
    cart: cartReducer,
    user: userReducer,
    shoe: shoeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const userAppDispatch = useDispatch<AppDispatch>;

export default store;
