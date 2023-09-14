import React from "react";
import PacoLogo from "../assets/images/pacol_logo.png";
import Home from "./Home";

const Sections = () => {
  return (
    <div className="mt-10">
      <div className=" flex justify-between mx-16">
        <img
          src={PacoLogo}
          alt="Paco log"
          className=" w-52 h-20 cursor-pointer"
        />
        <span className=" flex space-x-16 uppercase text-pacoGreen font-medium text-base cursor-pointer">
          <p>About us</p>
          <p>Our Services</p>
          <p>Contact us</p>
        </span>
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default Sections;
