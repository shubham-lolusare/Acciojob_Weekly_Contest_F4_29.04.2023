import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/HomePage/homePageSlice";
import cartReducer from "../components/Cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    myCart: cartReducer,
  },
});

export default store;
