import React from "react";

const Footer = () => {
  return (
    <div className="bg-bgDark  xl:px-[100px] sm:px-[50px] px-[20px] pt-[20px] lg:pt-[40px] xl:pt-[80px] ">
      <div className=" pb-[20px] lg:pb-[40px] xl:pb-[64px]  grid grid-cols-1 gap-y-2  lg:grid-cols-2 xl:grid-cols-4">
        {" "}
        <div>
          <p className="text-white text-[20px] lg:text-[24px] font-bold">
            ProcureDC
          </p>
          <span className="text-[#9CA3AF]  text-[14px] lg:text-[16px] ">
            Transforming data center
            <br /> procurement for the digital age.
          </span>
        </div>
        <div className=" flex flex-col  text-[12px] lg:text-[16px]">
          <p className="text-white  font-bold">Solutions</p>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
        </div>
        <div className="  flex flex-col  text-[12px] lg:text-[16px]">
          <p className="text-white  font-bold">Solutions</p>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
        </div>
        <div className="  flex flex-col  text-[12px] lg:text-[16px]">
          <p className="text-white  font-bold">Solutions</p>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
          <span className="text-[#9CA3AF]  ">For Buyers</span>
        </div>
      </div>
      <hr
        style={{ color: "#1F2937" }}
        className=" pb-[20px] lg:pb-[24px] xl:pb-[35px]"
      />
      <div className="flex text-[12px] lg:text-[16px] flex-col lg:flex-row pb-[20px] lg:pb-[40px] xl:pb-[82px]">
        <p className="text-[#9CA3AF]  ">
          © 2025 ProcureDC. All rights reserved.
        </p>
        <div className="lg:ms-auto text-[#9CA3AF]   flex flex-col lg:flex-row gap-x-[25px]">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
