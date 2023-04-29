// This slice define the entire logic for myCart slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

let cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((data) => data != action.payload);
    },
    resetCart(state) {
      return state.filter(() => false);
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
