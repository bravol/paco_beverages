import React from "react";
import PacoLogo from "../assets/images/pacol_logo.png";
import Home from "./home/Home";
import Services from "./home/Services";
import AboutUs from "./home/AboutUs";
import ContactUs from "./home/ContactUs";
import { Link, Element } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

const Sections = () => {
  return (
    <div className="mt-10">
      <div className=" flex justify-between px-4 lg:px-16 md:px-6">
        <img
          src={PacoLogo}
          alt="Paco log"
          className=" md:w-52 md:h-20 w-28 h-12 cursor-pointer"
        />
        {!isMobile ? (
          <nav>
            <ul className="flex space-x-4 md:space-x-16 uppercase text-pacoGreen font-medium md:text-base text-sm">
              <li className=" cursor-pointer">
                <Link to="about-us" smooth={true} duration={500}>
                  About Us
                </Link>
              </li>
              <li className=" cursor-pointer">
                <Link to="services" smooth={true} duration={500}>
                  Our Services
                </Link>
              </li>
              <li className=" cursor-pointer">
                <Link to="contact-us" smooth={true} duration={500}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <Menu>
            <MenuButton as={Button} colorScheme="white">
              <GiHamburgerMenu
                size={30}
                className=" cursor-pointer text-pacoGreen"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link
                  to="about-us"
                  smooth={true}
                  duration={500}
                  className=" text-pacoGreen font-montserrat font-medium"
                >
                  About Us
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className=" text-pacoGreen font-montserrat font-medium"
                >
                  Our Services
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  className=" text-pacoGreen font-montserrat font-medium"
                >
                  Contact Us
                </Link>{" "}
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </div>
      <div>
        <Home />
        <Element name="services">
          <Services />
        </Element>
        <Element name="about-us">
          <AboutUs />
        </Element>
        <Element name="contact-us">
          <ContactUs />
        </Element>
      </div>
    </div>
  );
};

export default Sections;
