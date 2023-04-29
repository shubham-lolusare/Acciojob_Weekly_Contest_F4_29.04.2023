// This component display the success page when the user checks out

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ShopSuccess() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <div className="flex p-6 justify-center items-center text-pink-950 w-screen h-screen flex-col gap-4 sm:items-start">
      <div className="text-3xl">Thanks for shoping with us!!! </div>
      <div className="text-2xl font-semibold">Redirecting to HomePage...</div>
    </div>
  );
}
