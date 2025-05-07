import { configureStore } from "@reduxjs/toolkit";
import { cartListSlice } from "../components/cartListSlice";

export const store = configureStore({
  reducer: {
    cartList: cartListSlice.reducer,
  },
});
