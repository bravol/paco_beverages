import React from "react";
import PacoTonto from "../assets/images/pacoDrink.png";
import ArrowBottomLeft from "../assets/images/pacobottomright.png";
import ListButton from "./../assets/images/paco_list.png";

const Home = () => {
  return (
    <div className="container mx-16 flex mb-4">
      <div className="basis-1/3 mt-24 ">
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

      <div className=" uppercase basis-1/3 mt-4">
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
      <div className=" basis-1/3 mt-4">
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
        <div className="mt-5 bg-pacoBg pb-14 pt-8 -ml-28 space-y-8">
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
  );
};

export default Home;
