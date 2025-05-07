import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartListSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    append: (state, actions) => {
      state.push(actions.payload);
    },
    load: (state, actions) => {
      // state.push(...actions.payload);
      const initialCartList = actions.payload;

      for (const cratItem of initialCartList) {
        if (state.find((item) => Number(item.id) === Number(cratItem.id)))
          continue;
        state.push(cratItem);
      }
    },
  },
});

export const { append, load } = cartListSlice.actions;

export default cartListSlice.reducer;
