import React from "react";
import {
  FaCopyright,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaMailBulk,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import PacoLogo from "../../assets/images/pacol_logo.png";

const ContactUs = () => {
  return (
    <div className=" md:mt-28 mt-16 h-screen w-full  scroll-smooth">
      <div className=" bg-pacoGreen">
        <div className=" md:px-16 px-4">
          <p className=" uppercase md:text-5xl text-4xl font-montserrat text-white py-11 text-center md:text-start">
            <span className=" underline underline-offset-8 md:underline-offset-[16px]">
              Contact
            </span>{" "}
            us
          </p>
          <p className=" font-montserrat text-white md:text-base text-sm font-extralight pb-9">
            Do you have something you would like to let us know or clarify for
            you? Please reach out to us below
          </p>
          <div className=" pb-44 grid gap-5 md:w-2/5">
            <input
              type="text"
              placeholder="Name"
              className=" h-11 pl-3 text-xs font-karla"
            />
            <input
              type="email"
              placeholder="Email"
              className=" h-11 pl-3 text-xs font-karla"
            />
            <textarea
              id="txtid"
              name="txtname"
              rows="4"
              cols="50"
              maxlength="200"
              className=" h-40 pl-3 text-sm font-karla"
              placeholder="Your Message here..."
            ></textarea>
            <span className=" bg-pacoGold py-2 flex items-center justify-center gap-2 text-white font-karla text-xs uppercase font-semibold cursor-pointer">
              <FaEnvelope size={25} className="" /> Send message
            </span>
          </div>
        </div>
      </div>
      <div className=" md:pb-20 pb-10 md:px-16 px-4 md:mt-10 mt-6 flex flex-wrap">
        <div className=" md:w-2/3 md:border-r-2 border-r-pacoGreen">
          <p className=" md:text-3xl text-2xl text-pacoGreen font-light font-montserrat text-center md:text-start">
            <span className=" underline underline-offset-8 md:underline-offset-[16px] decoration-pacoRed">
              SUBSCRIBE
            </span>{" "}
            TO OUR NEWSLETTER
          </p>
          <p className=" md:py-8 py-6 text-sm font-karla font-light text-pacoBlack">
            We would like to keep you up-to-date with all the new steps we are
            taking to better service provision to you
          </p>
          <input
            type="email"
            className=" bg-pacoBg pl-3 text-base font-karla h-10 md:w-1/2 w-full"
            placeholder="Email Address"
          />
          <span className=" bg-pacoGreen py-2 mt-5 md:w-1/2 w-full flex items-center justify-center gap-2 text-white font-karla text-xs uppercase font-semibold cursor-pointer">
            <MdContactMail size={25} className="" /> Subscribe
          </span>
        </div>
        <div className="md:ml-4 md:mt-20 mt-12">
          <span className=" font-montserrat text-base font-extralight space-y-5">
            <p className=" flex items-center gap-2">
              {" "}
              <FaPhoneAlt /> +256 764 001511 / +256 709 788972
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaEnvelopeOpenText /> P.O. Box 26, HOIMA (UGANDA)
            </p>
            <p className="flex items-center gap-2">
              <FaMailBulk />
              pacobeverages@gmail.com
            </p>
          </span>
          <div className="">
            <img
              src={PacoLogo}
              alt=""
              className=" md:mt-24 mt-10 md:w-40 md:h-16 w-20 h-12"
            />
          </div>
        </div>
      </div>
      <div className=" pb-10 flex justify-between md:mx-16 mx-4 border-t-2 border-t-pacoGreen text-pacoGreen text-xs font-karla">
        <p className=" flex items-center">
          <FaCopyright />
          2023 All Rights Reserved
        </p>
        <p>www.pacobeverages.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
