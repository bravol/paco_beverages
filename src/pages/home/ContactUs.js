import React from "react";
import { FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className=" mt-28 h-screen w-full  scroll-smooth">
      <div className=" bg-pacoGreen">
        <div className=" px-16">
          <p className=" uppercase md:text-5xl text-4xl font-montserrat text-white py-11">
            <span className=" underline underline-offset-8 md:underline-offset-[16px]">
              Contact
            </span>{" "}
            us
          </p>
          <p className=" font-montserrat text-white md:text-base text-sm font-extralight pb-9">
            Do you have something you would like to let us know or clarify for
            you? Please reach out to us below
          </p>
          <div className=" pb-10 grid gap-5 md:w-2/5">
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
              className=" h-40 pl-3 text-xs font-karla"
              placeholder="Your Message here..."
            ></textarea>
            <span className=" bg-pacoGold py-2 flex items-center justify-center gap-2 text-white font-karla text-xs uppercase font-semibold cursor-pointer">
              <FaEnvelope size={25} className="" /> Send message
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
