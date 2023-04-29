import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import ErrorPage from "./components/Error/Error.jsx";
import ShopSuccess from "./components/Cart/ShopSuccess.jsx";
import Cart from "./components/Cart/Cart.jsx";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./app/store.js";
import { Provider } from "react-redux";

import "./index.css";

let router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="success" element={<ShopSuccess />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
