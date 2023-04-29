import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Leftnav from "../Shared/Leftnav/Leftnav";
import Rightnav from "../Shared/Rightnav/Rightnav";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Header />
      <div className="grid grid-cols-3 gap-2 text-center">
        <Leftnav />
        <Outlet />
        <Rightnav />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
