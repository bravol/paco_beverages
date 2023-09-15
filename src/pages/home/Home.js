import React from "react";
import PacoTonto from "../../assets/images/pacoDrink.png";
import ArrowBottomLeft from "../../assets/images/pacobottomright.png";
import ListButton from "../../assets/images/paco_list.png";
import ImageHouse from "../../assets/images/paco_house1.jpg";
import ArrowTopLeft from "../../assets/images/paco_topleft.png";
import ArrowBottomLef from "../../assets/images/paco_bottomleft.png";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" w-screen">
      <div className="px-4 lg:px-16 md:flex md:px-6 w-full mb-4">
        {/* ist column */}
        <div className=" w-full lg:w-1/3 md:1/2  md:mt-24 mt-8 ">
          <span className=" block uppercase text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[64px] text-pacoGreen ">
            Original African{" "}
            <span className="underline md:underline-offset-[16px] underline-offset-8 decoration-pacoRed">
              Taste!
            </span>
          </span>
          <p className=" mt-6 md:mt-9 mr-3 text-xs">
            Drinks of undeniable African heritage in taste and feel, brewed
            specially with indigenous ingredients with brewing sorghum at the
            forefront.
          </p>
        </div>
        {/* 2 column */}
        <div className=" w-full uppercase lg:w-1/3 md:1/2 mt-4 relative">
          <div className=" bg-pacoBg h-[320px]  w-full relative mt-36 -z-50">
            <img
              src={PacoTonto}
              alt="Paco Tonto"
              className="h-[400px] lg:h-[400px] md:h-[350px] md:w-[220px] lg:w-[280px] w-[280px] lg:ml-24 md:ml-16 ml-32 absolute inset-0 -mt-28"
            />
            <div className=" bg-pacoGreen  h-[120px] w-[110px] absolute bottom-0 right-0 hidden lg:block"></div>
            <p className=" capitalize text-pacoBlack font-montserrat md:ml-12 ml-40 lg:text-2xl text-xl font-light absolute bottom-0 inset-x-0 mb-2 ">
              Paco tonto
            </p>
          </div>
        </div>

        {/* 3 column */}
        <div className=" lg:w-1/3 md:w-full mt-4">
          <img
            src={ArrowBottomLeft}
            alt="Arrow"
            className="lg:ml-24 md:ml-5 md:mt-4 hidden md:block"
          />

          <div className="space-y-6">
            <div className="flex space-x-4 mt-10 items-center">
              <img src={ListButton} alt="" className=" ml-2 w-9 h-8" />
              <span className="">
                <p className=" font-montserrat text-base text-pacoGreen">
                  Original African Taste
                </p>
                <p className=" font-karla text-xs">
                  Brought forward by the indigenous brewing sorghum
                </p>
              </span>
            </div>
            <div className="flex space-x-4 items-center">
              <img src={ListButton} alt="" className=" ml-2 w-9 h-8" />{" "}
              <span className="">
                <p className=" font-montserrat text-base text-pacoGreen">
                  A General Taste
                </p>
                <p className=" font-karla text-xs">
                  We accommodate the taste buds of various communities
                </p>
              </span>
            </div>
            <div className="flex space-x-4 items-center ">
              <img src={ListButton} alt="" className=" ml-2 w-9 h-8" />{" "}
              <span className="">
                <p className=" font-montserrat text-base text-pacoGreen">
                  Local Materials
                </p>
                <p className=" font-karla text-xs">
                  We believe in empowering the local producer by buying their
                  produce as raw materials for our Tonto.
                </p>
              </span>
            </div>
          </div>
          <div className="mt-5 bg-pacoBg pb-14 md:pb-7 pt-8 md:-ml-24 space-y-8 mb-1">
            <span className=" ml-8 cursor-pointer uppercase bg-pacoGold py-3 px-12 rounded-[32px] text-white font-montserrat text-xs">
              THE PACO TONTO
            </span>
            <p className="uppercase  ml-8 md:ml-0 w-full font-montserrat lg:text-2xl text-xl md:text-center ">
              AN UNMISTAKABLE AFRICAN TASTE
            </p>
            <Link to="contact-us" smooth={true} duration={500}>
              <button className="ml-8 mt-3  py-3 px-6 text-xs font-karla bg-pacoGreen uppercase text-white hover:bg-white hover:text-pacoGreen hover:border hover:border-pacoGreen">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ANOTHER SECTION */}
      <div className=" bg-pacoGreen mx-auto md:px-6 lg:px-16 px-4 md:flex pb-24 w-full">
        <div className=" w-full lg:w-2/6 mt-12 md:pt-4">
          <div className=" relative">
            <div className="h-10 w-3 bg-pacoRed -mb-6 z-10 absolute top-0 left-0 "></div>
            <img src={ImageHouse} alt="" className="h-[270px]" />
          </div>

          <p className=" mt-6 font-montserrat md:text-6xl text-4xl text-center md:text-start text-white uppercase">
            GET <span className=" lg:block">TO KNOW</span>
            <span className="underline ml-2  md:underline-offset-[16px] underline-offset-8 decoration-white">
              US
            </span>
          </p>
          {/* arrow */}
          <img
            src={ArrowTopLeft}
            alt=""
            className=" md:ml-40 md:mt-5 hidden md:block"
          />
        </div>

        <div className=" w-full lg:w-3/6 lg:ml-32 md:ml-10 md:mt-20 mt-8">
          <div className=" mx-auto">
            <p className=" font-montserrat text-base text-white mb-6">
              We are a beverages company of humble beginnings, established in
              November 2020
            </p>
            <Link to="contact-us" smooth={true} duration={500}>
              <span className="flex cursor-pointer items-center lg:w-2/5 w-full justify-center gap-3 py-2 px-5 text-xs font-karla bg-white uppercase text-pacoGreen hover:bg-pacoBg hover:text-white hover:border hover:border-white transition ease-in-out">
                <FaEnvelope size={24} />
                Contact Us
              </span>
            </Link>

            <div className="flex md:mt-24 mt-10">
              <div className=" h-8 w-10 bg-pacoGold text-center text-white mr-9">
                <p className="mt-1 px-3">1</p>
              </div>
              <span className=" lg:space-y-6 space-y-4 font-montserrat text-white">
                <p className=" uppercase text-2xl">ESTABLISHMENT</p>
                <p className=" text-xs">
                  Paco Beverages Uganda Limited started in Kikuube district at
                  Kyarushesa Trading Center, Kyangwali subcounty in November
                  2020.
                </p>
              </span>
            </div>
            <div className="flex lg:mt-20 mt-10  ">
              <span className=" h-8 w-10 bg-pacoGold text-center text-white mr-9">
                <p className="mt-1 px-3">2</p>
              </span>
              <span className=" lg:space-y-6 space-y-4 font-montserrat text-white">
                <p className=" uppercase text-2xl">URSB & UNBS-CERTIFIED</p>
                <p className=" text-xs">
                  We are certified by both the Uganda Registration Services
                  Bureau (URSB) and the Uganda National Bureau of Standards
                  (UNBS). This places us in a position as a company in whose
                  services you can trust to offer great quality to you.
                </p>
              </span>
            </div>
            <img
              src={ArrowBottomLef}
              alt=""
              className=" md:-mt-[480px] md:ml-96 h-56 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
