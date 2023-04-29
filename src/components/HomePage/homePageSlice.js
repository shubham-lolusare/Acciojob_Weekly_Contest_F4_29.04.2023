// This slice defines the logic for the product slice of store

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  productData: [],
  status: "idle",
  error: null,
};

export const productFetch = createAsyncThunk("products/fetch", async () => {
  let res = await fetch("https://dummyjson.com/products");
  return await res.json();
});

const hpSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productFetch.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.productData = action.payload.products;
      })
      .addCase(productFetch.rejected, (state, action) => {
        state.error = action.error;
        state.status = "failed";
      });
  },
});

export default hpSlice.reducer;
