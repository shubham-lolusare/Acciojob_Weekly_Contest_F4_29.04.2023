// This is the redux store where all the data will be saved
// It contains two slices: product slice and myCart slice
// product slice is used to store the fetched data from the server
// myCart slice will store the id of the items that are added to the cart

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/HomePage/homePageSlice";
import cartReducer from "../components/Cart/cartSlice";

const store = configureStore({
  reducer: {
    // product slice
    product: productReducer,

    // cart slice
    myCart: cartReducer,
  },
});

export default store;
