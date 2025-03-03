import Image from "next/image";
import React from "react";

const StatsBox = ({
  icon,
  number,
  text,
  subText,
}: {
  icon: string;
  number: number;
  text: string;
  subText?: string;
}) => {
  return (
    <div className="flex sm:mx-0 xl:mx-auto  w-fit  items-center gap-x-[20px]">
      <div className="  w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[102px] xl:h-[102px]">
        <Image
          src={icon}
          alt="icon"
          width={102}
          height={102}
          className=" object-contain w-full h-full"
        />
      </div>{" "}
      <div style={{ lineHeight: "41px" }} className="flex  flex-col  ">
        <span className=" text-[22px] lg:text-[32px] xl:text-[36px]  font-semibold">
          {number}+
        </span>
        <p className="text-[16px] lg:text-[20px] xl:text-[24px]   font-semibold ">
          {text}
        </p>
        {subText && (
          <div
            style={{ lineHeight: "20px" }}
            className=" text-[12px] lg:text-[16px] xl:text-[20px]   font-light  "
          >
            {subText}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsBox;
