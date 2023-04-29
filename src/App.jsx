// This component will display two pages in place of outlet.
// The Home page and the cart page
// The navbar component is kept common for both the pages

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="w-[99.9%] flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}
