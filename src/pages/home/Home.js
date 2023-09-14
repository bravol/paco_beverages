import React from "react";
import PacoTonto from "../../assets/images/pacoDrink.png";
import ArrowBottomLeft from "../../assets/images/pacobottomright.png";
import ListButton from "../../assets/images/paco_list.png";
import ImageHouse from "../../assets/images/paco_house1.jpg";
import ArrowTopLeft from "../../assets/images/paco_topleft.png";
import ArrowBottomLef from "../../assets/images/paco_bottomleft.png";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" w-screen h-fit">
      <div className="container px-16 flex mb-4 w-screen">
        <div className="md:basis-1/3 mt-24 ">
          <span className=" uppercase  text-6xl md:leading-[64px] text-pacoGreen ">
            Original African{" "}
            <span className="underline md:underline-offset-[16px] underline-offset-8 decoration-pacoRed">
              Taste!
            </span>
          </span>
          <p className="mt-9 mr-3 text-xs">
            Drinks of undeniable African heritage in taste and feel, brewed
            specially with indigenous ingredients with brewing sorghum at the
            forefront.
          </p>
        </div>

        <div className=" uppercase md:basis-1/3 mt-4">
          <img
            src={PacoTonto}
            alt="Paco Tonto"
            className="h-[400px] w-[232px] md:ml-24 ml-10"
          />
          <div className=" bg-pacoBg h-[320px] -mt-[250px]  "></div>
          <p className=" capitalize -mt-[50px] text-pacoBlack font-montserrat md:ml-12 ml-5 text-2xl font-light">
            Paco tonto
          </p>
        </div>
        <div className=" md:basis-1/3 mt-4">
          <img src={ArrowBottomLeft} alt="Arrow" className=" -ml-24 mt-4" />
          <div className="space-y-6">
            <div className="flex space-x-4 mt-10 items-center">
              <img src={ListButton} alt="" className=" ml-2 w-11 h-10" />
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
              <img src={ListButton} alt="" className=" ml-2 w-11 h-10" />
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
              <img src={ListButton} alt="" className=" ml-2 w-11 h-10" />
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
          <div className="mt-5 bg-pacoBg pb-14 pt-8 -ml-28 space-y-8 mb-16">
            <span className=" ml-8 cursor-pointer uppercase bg-pacoGold py-3 px-12 rounded-[32px] text-white font-montserrat text-xs">
              THE PACO TONTO
            </span>
            <p className=" uppercase ml-8 font-montserrat text-2xl ">
              AN UNMISTAKABLE AFRICAN TASTE
            </p>
            <button className="ml-8  py-3 px-6 text-xs font-karla bg-pacoGreen uppercase text-white hover:bg-white hover:text-pacoGreen hover:border hover:border-pacoGreen">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* aother section */}
      <div className=" bg-pacoGreen px-16 flex pb-24">
        <div className="basis-2/5 mt-12">
          <div className=" relative">
            <div className="h-10 w-3 bg-pacoRed -mb-6 z-10 absolute top-0 left-0"></div>
            <img src={ImageHouse} alt="" className="h-[270px]" />
          </div>

          <p className=" mt-6 font-montserrat text-6xl text-white uppercase">
            GET <span className=" block">TO KNOW</span>
            <span className="underline md:underline-offset-[16px] underline-offset-8 decoration-white">
              US
            </span>
          </p>
          {/* arrow */}
          <img src={ArrowTopLeft} alt="" className="  md:ml-40" />
        </div>

        <div className=" basis-3/5 md:ml-32 mt-20">
          <div>
            <p className=" font-montserrat text-base text-white mb-6">
              We are a beverages company of humble beginnings, established in
              November 2020
            </p>
            <button className="flex items-center gap-3 py-2 px-5 text-xs font-karla bg-white uppercase text-pacoGreen hover:bg-pacoBg hover:text-white hover:border hover:border-white transition ease-in-out">
              <FaEnvelope size={24} />
              Contact Us
            </button>

            <div className="flex mt-24">
              <div className=" h-8 w-10 bg-pacoGold text-center text-white mr-9">
                <p className="mt-1 px-3">1</p>
              </div>
              <span className=" space-y-6 font-montserrat text-white">
                <p className=" uppercase text-2xl">ESTABLISHMENT</p>
                <p className=" text-xs">
                  Paco Beverages Uganda Limited started in Kikuube district at
                  Kyarushesa Trading Center, Kyangwali subcounty in November
                  2020.
                </p>
              </span>
            </div>
            <div className="flex mt-24">
              <span className=" h-8 w-10 bg-pacoGold text-center text-white mr-9">
                <p className="mt-1 px-3">2</p>
              </span>
              <span className=" space-y-6 font-montserrat text-white">
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
              className=" -mt-[480px] ml-96 h-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
