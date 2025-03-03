"use client";
import Image from "next/image";
import React, { useState } from "react";

const Options = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  return (
    <div className="flex flex-col  lg:flex-row  mt-[51px] ">
      <div className="flex flex-col gap-y-[10px] lg:gap-y-[30px] col min-w-[30%]">
        {["", 1, 2, 3].map((item, index) => (
          <div
            onClick={() => setSelectedOptionIndex(index)}
            key={index}
            className={`cursor-pointer  w-full text-[20px] lg:text-[26px] font-bold  items-center flex ${
              index === 0 && "rounded-tl-[40px]"
            }

            
${
  selectedOptionIndex === index
    ? " bg-[#143AA2]  text-white "
    : "bg-white text-[#143AA2]"
}

          ${index === 0 && "rounded-tr-[40px]  lg:rounded-tr-[0px]"}
          ${index === 3 && "rounded-br-[40px]  lg:rounded-br-[0px]"}
        
        
        ${index === 3 && "rounded-bl-[40px] "} transition-all duration-600`}
          >
            {" "}
            <p className="py-[16px] lg:py-[58px]  px-[41px]">Consultants </p>
            {index === selectedOptionIndex ? (
              <Image
                src="/images/Arrow up-right.png"
                alt="arrow"
                width={20}
                height={20}
                className=" ms-auto me-[51px]"
              />
            ) : (
              <Image
                src="/images/ArrowUpPrimary.png"
                alt="arrow"
                width={20}
                height={20}
                className=" ms-auto me-[51px]"
              />
            )}
          </div>
        ))}
      </div>
      <div className="p-[45px] text-textLight lg:ms-[30px] dark:text-textDark  rounded-l-[40px] lg:rounded-l-[0px] rounded-r-[40px]  flex-grow-1  px-[45px] flex lg:mt-0 mt-[20px]  flex-col justify-center  bg-white dark:bg-[#143AA2] ">
        <img
          alt="company_logo"
          src="/images/suppliers.png"
          className="lg:h-[80%]  rounded-[8px]"
        />
        <div className="w-full mt-[15px]">
          <p className="text-[20px] lg:text-[26px] font-bold ">Title Here</p>
          <span className="text-[16px] lg:text-[20px] font-regular leading-[27px]">
            Join the Network Where Suppliers Become Hyperscale Heroes.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Options;
