// This componet displays the navbar on both the pages i.e HomePage and Cart components

import { Link } from "react-router-dom";
import logo from "./logo";
import home from "../../assets/home.svg";
import cart from "../../assets/shopping_cart.svg";
import { useDispatch } from "react-redux";
import { resetCart } from "../Cart/cartSlice";

export default function Navbar() {
  let dispatch = useDispatch();
  return (
    <div className="flex justify-between sticky top-0 z-50 bg-pink-950 text-yellow-100 text-xl items-center p-4 w-full sm:flex-col sm:gap-6 xs:gap-4">
      <div name="logo">
        {logo}{" "}
        <span className="align-middle text-4xl font-creepster text-yellow-100 xs:text-3xl">
          Shopping Heaven
        </span>
      </div>
      <div
        name="links"
        className="flex gap-12 xs:flex-col xs:gap-2 xs:self-start"
      >
        <Link
          to="/"
          onClick={() => {
            dispatch(resetCart());
          }}
        >
          <img
            src={home}
            alt="home"
            width="32px"
            className="inline-block align-middle"
          />{" "}
          <span className="align-middle">Homepage</span>
        </Link>

        <Link to="/cart">
          <img
            src={cart}
            alt="home"
            width="32px"
            className="inline-block align-middle"
          />{" "}
          <span className="align-middle">Cart</span>
          <span>{}</span>
        </Link>
      </div>
    </div>
  );
}
