import moment from "moment";
import React from "react";
import Marquee from "react-fast-marquee";
import logo from "../.././assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="text-center my-5">
        <img src={logo} alt="logo" />
        <h3 className="text-xl font-bold text-[#706F6F]">
          Journalism Without Fear or Favour
        </h3>
        <h3 className="text-2xl font-semibold ">
          {moment().format("dddd, MMMM DD, YYYY")}
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-secondary">Lates</button>
        <Marquee className="text-xl font-semibold text-red-500" speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
