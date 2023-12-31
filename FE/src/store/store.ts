import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authReducer } from "./auth/slice";
import { billReducer } from "./bill/slice";
import { cartReducer } from "./cart/slice";
import { categoryReducer } from "./category/slice";
import { evaluateReducer } from "./evaluate/slice";
import { shoeReducer } from "./shoe/slice";
import { sizeReducer } from "./size/slice";
import { userReducer } from "./user/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    size: sizeReducer,
    cart: cartReducer,
    user: userReducer,
    shoe: shoeReducer,
    evaluate: evaluateReducer,
    bill: billReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;

export default store;
