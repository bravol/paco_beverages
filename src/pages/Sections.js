import React from "react";
import PacoLogo from "../assets/images/pacol_logo.png";
import Home from "./home/Home";
import Services from "./home/Services";
import AboutUs from "./home/AboutUs";

const Sections = () => {
  return (
    <div className="mt-10">
      <div className=" flex justify-between mx-4 md:mx-16">
        <img
          src={PacoLogo}
          alt="Paco log"
          className=" md:w-52 md:h-20 w-28 h-12 cursor-pointer"
        />
        <span className=" flex space-x-4 md:space-x-16 uppercase text-pacoGreen font-medium md:text-base text-sm cursor-pointer">
          <p>About us</p>
          <p>Our Services</p>
          <p>Contact us</p>
        </span>
      </div>
      <div>
        <Home />
        <Services />
        <AboutUs />
      </div>
    </div>
  );
};

export default Sections;
