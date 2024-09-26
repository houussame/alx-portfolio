import React from "react";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/footer";
import Tools from "./tools";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
    >
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
        <Tools />
      </div>
    </div>
  );
};

export default Layouts;
