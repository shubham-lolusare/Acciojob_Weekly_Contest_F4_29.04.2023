// This cart component is responsible to display the entire cart page

import { useSelector, useDispatch } from "react-redux";
import CartProduct from "./CartProduct";
import { resetCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let cartItems = useSelector((state) => state.myCart);
  let products = useSelector((state) => state.product.productData);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let totalPrice = 0;

  cartItems.map((itemID) => {
    totalPrice = totalPrice + products[itemID - 1].price;
  });

  return (
    <div className="p-4 flex gap-4 md:flex-col">
      <div className="pt-0 flex-auto flex gap-4 flex-col">
        <h1 className="text-center text-5xl font-bold text-pink-950">
          My Cart
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {cartItems.map((itemID) => {
            return <CartProduct key={itemID} dataID={itemID} />;
          })}
        </div>
      </div>
      <div className="w-[30%] shrink-0 gap-8 p-8 flex flex-col justify-between bg-pink-300/30 backdrop-blur-sm text-pink-950 font-semibold rounded-2xl min-h-[650px] h-full md:w-[100%] md:min-h-full">
        <div className="flex flex-col gap-4 divide-y-2 divide-pink-950">
          <h1 className="text-center text-3xl font-bold md:text-2xl">
            Checkout List
          </h1>
          <div className="flex flex-col gap-4 pt-12 pb-8 xs:pt-4 xs:pb-4">
            {cartItems.map((itemID) => {
              return (
                <div
                  key={itemID}
                  className="flex justify-between text-lg sm:text-base"
                >
                  <li className="list-inside list-image-[url(https://icons.iconarchive.com/icons/saviourmachine/chat/16/shopping-girl-icon.png)]">
                    {products[itemID - 1].title}
                  </li>
                  <span>${products[itemID - 1].price}</span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-2xl pt-4">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-pink-950 text-yellow-100 w-[60%] p-2 rounded-xl text-xl sm:w-[100%] xs:text-base"
            onClick={() => {
              dispatch(resetCart());
              navigate("/success");
            }}
          >
            Click to CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}
