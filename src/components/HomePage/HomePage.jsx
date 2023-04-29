// This page shows the Home page component.
// After rendering it fetches the data from dummyJSON server and displays the products

import { useEffect } from "react";
import ProductList from "./ProductList";
import { useSelector, useDispatch } from "react-redux";
import { productFetch } from "./homePageSlice";

export default function HomePage() {
  let fetchStatus = useSelector((state) => state.product.status);
  let error = useSelector((state) => state.product.error);
  let dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(productFetch());
    }
  }, [dispatch, fetchStatus]);

  if (fetchStatus === "failed") {
    return (
      <div className="p-4 flex justify-center text-2xl sm:justify-start">
        {error.stack}
      </div>
    );
  }

  return <ProductList />;
}
