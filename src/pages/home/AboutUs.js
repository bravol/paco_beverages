import React from "react";
import ImageDrinks from "../../assets/images/drinks.jpg";

const AboutUs = () => {
  return (
    <div className=" w-full  scroll-smooth">
      <div className="mt-10 bg-pacoGreen mb-16 pb-10">
        <div className="lg:px-16 md:px-6 px-4 md:flex ">
          <div className=" md:w-2/3 w-full   pt-16">
            <p className=" font-montserrat text-white md:text-5xl text-4xl uppercase">
              OUR STORY
            </p>
            <p className=" font-karla text-xs md:text-sm mt-2 text-white">
              WHY WE DO WHAT WE DO
            </p>
            <p className=" font-montserrat text-xs mt-8 text-white text-justify">
              The brainchild of Chris Tugume, Alex Orimwesige & Patrick
              Mutabwire, Paco Beverages Uganda Limited started in Kikuube
              district at Kyarushesa Trading Center, Kyangwali subcounty in
              November 2020 from very humble beginnings. We started off with
              just one drum that has grown from sixty cartons to thousands of
              cartons as of today. Currently , we are in Bunyoro region but our
              products can be found in shops and supermarkets throughout Uganda.
              The locals in Kikuube Kyarushesa were amazed to have a brand that
              started locally in their area and has gone to have a great impact
              nationwide.
            </p>
            <div className=" mt-16">
              <p className=" font-montserrat text-lg text-white font-normal">
                OUR VISION
              </p>
              <p className=" font-karla text-xs text-white font-light mt-2">
                To be the leading producers of soft and hard drinks in East &
                Central Africa supporting the local (indigenous) communities by
                buying their products and offering employment to the local
                communities.
              </p>
            </div>
            <div className=" mt-9">
              <p className="font-montserrat text-lg text-white font-normal">
                OUR MISSION
              </p>
              <p className="font-karla text-xs text-white font-light mt-2">
                To be the leading producers of soft and hard drinks in East &
                Central Africa supporting the local (indigenous) communities by
                buying their products and offering employment to the local
                communities.
              </p>
            </div>
            <div className=" mt-9">
              <p className="font-montserrat text-lg text-white font-normal">
                FUTURE PROSPECTS
              </p>
              <p className="font-karla text-xs text-white font-light mt-2 pb-16">
                We are currently working on opening a trade route to Tchomia in
                the Democratic Republic of Congo (D.R.C)
              </p>
            </div>
          </div>

          <div className=" flex items-center mx-8 ">
            <div className=" relative">
              <div className="h-10 w-3 bg-pacoRed -mb-6 z-10 absolute top-0 left-0"></div>
              <img src={ImageDrinks} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:px-16 md:px-4 px-4">
        <div className="md:flex ">
          <p className=" font-montserrat md:text-5xl text-4xl text-pacoGreen text-center md:text-start">
            WHY YOU SHOULD CHOOSE US
          </p>
          <p className=" font-montserrat text-base text-pacoBlack">
            Here are a few reasons as to why you should choose us over all the
            clutter in the beverages industry.
          </p>
        </div>
        <div className=" flex flex-wrap gap-5 mt-10">
          <div className="pt-10 pb-10 bg-pacoBg px-9 md:w-[360px] w-full relative hover:bg-pacoGreen text-pacoBlack hover:text-white">
            <div className="h-10 w-3 bg-pacoGold hover:bg-pacoRed -mb-6 z-10 absolute top-0 right-0"></div>
            <p className="font-montserrat text-xl">WE USE LOCAL MATERIALS</p>
            <p className="font-karla text-xs mt-3 ">
              We are strong proponents of the Buy Uganda Build Uganda train of
              thought and we support the local producers by buying raw materials
              directly from them
            </p>
          </div>
          <div className="pt-10 pb-10 hover:bg-pacoBg px-9 md:w-[360px] w-full relative bg-pacoGreen hover:text-pacoGreen text-white md:mt-5 md:-mb-5">
            <div className="h-10 w-3 hover:bg-pacoGold bg-pacoRed -mb-6 z-10 absolute top-0 right-0"></div>
            <p className="font-montserrat text-xl">QUALITY PRODUCTS</p>
            <p className="font-karla text-xs mt-3 ">
              We manufacture products with you in mind. The Paco alcoholic
              fermented beverage is bound to bring appetite and no hangovers or
              headaches to your doorstep
            </p>
          </div>
          <span>
            <div className="pt-10 pb-10 bg-pacoBg px-9 md:w-[360px] w-full relative hover:bg-pacoGreen text-pacoGreen hover:text-white md:mt-10 md:-mb-10">
              <div className="h-10 w-3 bg-pacoGold hover:bg-pacoRed -mb-6 z-10 absolute top-0 right-0"></div>
              <p className="font-montserrat text-xl">UNIQUE TASTE</p>
              <p className="font-karla text-xs mt-3 ">
                Catering to a multicultural demographic, we crafted a taste that
                is unique to different cultural groupings but still true to its
                essence as a uniting African beverage
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
