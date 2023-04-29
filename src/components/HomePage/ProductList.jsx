import { useSelector } from "react-redux";
import Product from "./Product";

export default function ProductList() {
  let products = useSelector((state) => {
    return state.product.productData;
  });

  return (
    <div className="flex flex-col p-4 gap-4">
      <h1 className="text-center text-5xl font-bold text-pink-950">
        All Items
      </h1>
      <div className="w-[80%] self-center flex flex-wrap gap-6 md:w-full justify-center">
        {products.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
}
