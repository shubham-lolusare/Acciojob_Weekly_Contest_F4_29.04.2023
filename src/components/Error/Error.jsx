// In case of any errors in the route, the page will be redirected automatically to this page
// and will show the error that has occured

import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let navigate = useNavigate();

  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {" "}
      <div className="flex flex-col gap-8 w-[60%] md:w-[90%]">
        <h1 className="text-5xl">
          Oops!{" "}
          <b>
            <i>{error.status}</i>
          </b>
        </h1>
        <p className="text-2xl">
          The requested url{" "}
          <b>
            <i className="break-normal">{window.location.href}</i>
          </b>{" "}
          was not found!
        </p>
        <p className="text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          className="p-2 bg-slate-800 text-white w-[200px] rounded-lg"
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Home Page
        </button>
      </div>
    </div>
  );
}
