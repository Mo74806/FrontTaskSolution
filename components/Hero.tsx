import React from "react";
import { Button } from "./ui/button";
import StatsBox from "./StatsBox";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-83px)]" id="hero">
      {/* Background Image */}
      <img
        src="/images/hero.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 text-white xl:px-[100px] sm:px-[50px] px-[20px] flex flex-col min-h-[93vh]">
        <h1 className="text-[32px] lg:text-[48px] xl:text-[64px] xl:leading-[67px] md:mt-[80px] mt-[40px] font-bold">
          Your One-Stop <br /> Platform for Data
          <br /> Center Procurement
        </h1>
        <p className="text-[16px] lg:text-[20px] xl:text-[24px] mt-[20px] font-light">
          Empower your procurement process, expand your
          <br /> partnerships, and unlock unmatched purchasing power.
        </p>

        <div className="flex gap-x-[33px] mb-[26px] mt-[30px]">
          <Button className="bg-white cursor-pointer font-bold text-[#143aa2] p-[25px] py-[18px] hover:bg-transparent hover:text-white border hover:border-white transition-all duration-300 ">
            Find Supplier
          </Button>
          <Button className="bg-transparent border px-[25px] py-[18px] text-white font-bold hover:border-[#143aa2] hover:bg-[#143aa2]  transition-all duration-300 cursor-pointer">
            Join as Supplier
          </Button>
        </div>

        {/* Stats Section */}
        <div className="bg-black/40 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-y-2 mt-auto backdrop-blur-xs rounded-2xl px-[36px] py-[40px] mb-[30px] ">
          <StatsBox
            icon="/images/data-center.png"
            number={1000}
            text="Hyperscale"
          />
          <StatsBox icon="/images/globe.png" number={120} text="Countries" />
          <StatsBox
            icon="/images/cube.png"
            number={5000}
            text="Sub-suppliers"
          />
          <StatsBox
            icon="/images/pin.png"
            number={10}
            text="Suppliers"
            subText="per Sector per Region"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
