import { configureStore } from "@reduxjs/toolkit";
import { cartListSlice } from "../features/store/cartListSlice";

export const store = configureStore({
  reducer: {
    cartList: cartListSlice.reducer,
  },
});
