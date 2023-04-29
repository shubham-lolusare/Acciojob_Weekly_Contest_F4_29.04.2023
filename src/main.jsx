// The project is based on ReduxToolkit, ReactRouter and ReactJS created in Vite
// There are four pages in this project Homepage, cartpage, the success page and the error page
// Homepage will be shown at the start point where all the fetched products will be displayed
// Cartpage will show all the products that are added to the cart
// Success page will be shown when the user checks out
// Error page will be shown when there is any error in the particular route
// Hash router is used due to the problems with the deployment on github

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
