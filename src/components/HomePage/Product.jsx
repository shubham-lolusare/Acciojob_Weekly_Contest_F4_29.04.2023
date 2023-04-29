// This is the component which is used by the hompage ProductList component to show the fetched products card
// Here the add to cart and remove from cart functionality is added

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Cart/cartSlice";

export default function Product({ data }) {
  let cartItems = useSelector((state) => state.myCart);

  const dispatch = useDispatch();

  function handleAdd2Cart() {
    dispatch(addToCart(data.id));
  }

  function handleRemoveCart() {
    dispatch(removeFromCart(data.id));
  }

  return (
    <div className="border-2 border-pink-950 w-[260px] h-[400px] text-lg flex flex-col justify-between">
      <div
        name="image"
        className="border-b-2 border-b-pink-950 flex justify-center"
      >
        <img src={data.images[0]} className="h-[250px] w-full" />
      </div>
      <div name="title" className="pl-4 pr-4 font-bold">
        {data.title}
      </div>
      <div name="price" className="pl-4 font-bold">
        Price: ${data.price}
      </div>
      <div name="add2cart" className="flex justify-center  text-white">
        {cartItems.indexOf(data.id) === -1 ? (
          <button
            className="p-2 w-full h-full bg-pink-950"
            onClick={handleAdd2Cart}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="p-2 w-full h-full bg-green-950"
            onClick={handleRemoveCart}
          >
            Remove From Cart
          </button>
        )}
      </div>
    </div>
  );
}
