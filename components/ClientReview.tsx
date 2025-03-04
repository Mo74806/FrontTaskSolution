import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ClientReview = ({ index }: { index: number }) => {
  return (
    <div
      key={index}
      className="bg-bgWhite dark:bg-black  cursor-pointer hover:scale-[105%] hover:shadow-lg tranisition-all duration-300  hover:dark:shadow-white  rounded-[16px] p-[18px] lg:p-[24px] xl:p-[32px]"
    >
      <div className="flex flex-row gap-x-[16px] items-center">
        <Image
          src="/images/img.png"
          width="48"
          height={48}
          alt="client"
          className="rounded-[50%]"
        />
        <div className="w-auto flex flex-col">
          <p className="text-[16px] lg:text-[18px] xl:text-[20px] font-bold">
            Sarah Johnson
          </p>
          <span className=" text-[14px] xl:text-[16px] text-[#4B5563] dark:text-white">
            Procurement Manager
          </span>
        </div>
      </div>
      <p className="mt-[14px] lg:mt-[20px] xl:mt-[26px] text-[14px] xl:text-[16px] text-[#4B5563] dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quo
        accusamus libero aperiam soluta voluptate veritatis consequatur minus
        voluptas provident eligendi, illum possimus tempore modi, voluptatem,
        assumenda velit porro eaque.
      </p>
      <div className="flex  flex-row mt-[14px] lg:mt-[20px] xl:mt-[26px]">
        <Star fill="#143AA2" color="#143AA2" />
        <Star fill="#143AA2" color="#143AA2" />
        <Star fill="#143AA2" color="#143AA2" />
        <Star fill="#143AA2" color="#143AA2" />
        <Star fill="#143AA2" color="#143AA2" />
      </div>
    </div>
  );
};

export default ClientReview;
