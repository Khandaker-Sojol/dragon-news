import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="my-6">
      <div className="text-center space-y-2 text-[#706F6F] ">
        <img className="mx-auto" src={logo} alt="" />
        <p className="text-lg mt-4">Journalism Without Fear or Favour</p>
        <time className="text-xl font-medium">
          {format(new Date(), "EEEE, MMMM dd, yyyy")}
        </time>
      </div>
    </div>
  );
};

export default Header;
