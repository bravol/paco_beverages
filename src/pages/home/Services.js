import React from "react";
import ImageHouse from "../../assets/images/paco_house2.jpg";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <div className=" w-screen md:px-16 px-4 scroll-smooth md:mb-24 mb-10">
      <div className="md:mt-16 mt-10">
        <div className=" grid justify-items-center ">
          <p className="uppercase font-montserrat md:text-6xl text-4xl text-pacoGreen font-light">
            Our products
          </p>
          <p className="uppercase font-karla text-xs md:text-sm font-medium text-pacoGreen mt-2">
            AN AFFORDABLE PRODUCT MADE JUST FOR YOU
          </p>

          <div className="text-center mt-12 mb-8">
            <p className="font-montserrat text-pacoBlack text-xs">
              The Paco Alcoholic Fermented Beverage is an African tonto,
              specially brewed from the indigenous African
            </p>
            <p className="font-montserrat text-pacoBlack text-xs">
              brewing sorghum, ensuring a uniquely African imprint in its taste.
            </p>
          </div>

          <div className=" relative">
            <div className="h-10 w-3 bg-pacoRed -mb-6 z-10 absolute top-0 left-0"></div>
            <img
              src={ImageHouse}
              alt=""
              className="md:h-[270px] w-full h-full"
            />
          </div>
          <span className=" bg-pacoGold mt-4 py-3 md:px-14 px-10 font-montserrat text-xs md:text-sm text-white rounded-[32px]">
            Cartons of Paco Fermented Alcoholic Beverage
          </span>
        </div>
        <div className="">
          <div className="mt-12 ">
            <p className=" text-3xl md:text-4xl lg:text-5xl  font-montserrat text-pacoGreen uppercase  font-light mb-5">
              A
              <span className="block underline underline-offset-8 md:underline-offset-[16px] decoration-pacoRed">
                few Facts
              </span>
            </p>
            <p className="font-montserrat text-sm md:text-base text-pacoBlack">
              Starting off in November 2020 with five workers who worked
              tirelessly with a vision and core goals in mind, we have seen
              growth over the years in various fields.
            </p>
          </div>
          <div className=" flex flex-wrap gap-5 mt-10">
            <div className="pt-16 pb-14 bg-pacoBg px-11 md:w-[360px] w-full relative hover:bg-pacoGreen text-pacoGreen hover:text-white">
              <div className="absolute top-0 right-0 mt-10 mr-10">
                <BsFillArrowUpRightCircleFill
                  size={30}
                  className="text-pacoGold hover:text-pacoRed"
                />
              </div>
              <p className="font-montserrat text-2xl">130+ DISTRICTS</p>
              <p className="font-karla text-xs md:text-sm mt-3 ">
                Starting off with simply supplying Kikuube Kyarushesa, we
                currently transport our manufactured products to all the
                districts throughout Uganda.
              </p>
            </div>

            <div className="pt-16 pb-14 hover:bg-pacoBg px-11 md:w-[360px] w-full relative bg-pacoGreen hover:text-pacoGreen text-white">
              <div className="absolute top-0 right-0 mt-10 mr-10">
                <BsFillArrowUpRightCircleFill
                  size={30}
                  className="text-pacoGold hover:text-pacoRed"
                />
              </div>
              <p className="font-montserrat text-2xl">OUR SERVICES</p>
              <p className="font-karla text-xs md:text-sm mt-3 ">
                As a company, we offer a variety of services however, we are
                currently focused on juice production
              </p>
            </div>
            <div className="pt-16 pb-14 bg-pacoBg px-11 md:w-[360px] w-full relative hover:bg-pacoGreen text-pacoGreen hover:text-white">
              <div className="absolute top-0 right-0 mt-10 mr-10">
                <BsFillArrowUpRightCircleFill
                  size={30}
                  className="text-pacoGold hover:text-pacoRed"
                />
              </div>
              <p className="font-montserrat text-2xl">PREMISES</p>
              <p className="font-karla text-xs md:text-sm mt-3 ">
                We currently have premises in Kakoora Habitat in Hoima City and
                along Kampala Road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
