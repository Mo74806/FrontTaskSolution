import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="solutions" className="relative border">
      {/* Foreground Content (Sets Height) */}
      <div className="relative z-10 xl:px-[100px] sm:px-[50px] px-[20px] w-full">
        <div className="flex flex-col mt-[73px]">
          <h1 className="leading-[32px] lg:leading-[41px] xl:leading-[65px] text-[32px] lg:text-[48px] xl:text-[64px] text-white font-extrabold">
            Data Center
            <br /> Hyperscaler Buyer
          </h1>
          <p className="text-[20px] font-regular text-white leading-[27px] mt-[23px]">
            Scale Smarter: Source Globally, Save Aggressively, Sustain
            Seamlessly
          </p>

          {/* Grid Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] mt-[60px] mb-[100px]">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="cursor-pointer w-full relative bg-[#143AA2]/50 backdrop-blur-xs py-[20px] xl:py-[50px] px-[20px] xl:px-[38px] rounded-[16px] hover:backdrop-blur-none hover:bg-[#143AA2] transition-all duration-300"
              >
                <p className="text-white text-[18px] lg:text-[20px] xl:text-[25px] font-bold">
                  Supply Chain Resilience
                </p>
                <span className="text-white text-[14px] lg:text-[16px] xl:text-[20px]">
                  Guaranteed Access to Pre-Vetted, Redundant Suppliers Mitigate
                  risks of delays, shortages, or geopolitical disruptions with a
                  curated network of certified sub-suppliers across regions.
                </span>
                <div className="absolute cursor-pointer right-0 bottom-0 mb-[10px] mr-[20px]">
                  <Image
                    src="/images/Arrow up-right.png"
                    width={20}
                    height={20}
                    className="object-scale-down  w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px]"
                    alt="arrow"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Images (Centered and Matches Foreground Height) */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <img
          width={0}
          height={0}
          src="/images/services-bg.png"
          alt="services background"
          className="w-full h-full object-cover object-center"
        />
        <img
          width={0}
          height={0}
          src="/images/services-ovelay.png"
          alt="services overlay"
          className="absolute w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Services;
