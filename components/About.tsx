import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="xl:px-[100px] sm:px-[50px] px-[20px] mt-[32px] mb-[70px]">
      <span className="text-[14px] w-auto font-extrabold px-[18px] py-[10px] items-center text-[#3E8DE3] bg-[#D1E5FA] rounded-[5px]  ">
        WHO WE ARE
      </span>
      <div className="flex items-center  mt-[32px]">
        <h1 className="leading-[32px] lg:leading-[41px] xl:leading-[65px] h-auto  text-[32px] lg:text-[48px]  xl:text-[64px] text-[#143aa2] font-extrabold">
          Powering the Future of <br />
          Data Centers, One <br />
          Connection at a Time
        </h1>
        <div className="w-[403px] ms-auto  h-[300px]">
          <Image
            src="/images/logo.png"
            alt="about-logo-image"
            width={403}
            height={300}
            className=" object-scale-down w-full h-full"
          />
        </div>
      </div>
      <hr
        style={{
          color: "rgba(0, 0, 0, 0.25)",
          borderWidth: "2px",
        }}
      />

      <div className="mt-[64px]">
        <h2 className=" text-[32px] lg:text-[48px]  xl:text-[64px] font-extrabold text-textLight dark:text-textDark leading-[32px] lg:leading-[41px] xl:leading-[65px]">
          {" "}
          See How ProcureDC
          <br /> Transforms Procurement
        </h2>
        <p className=" text-[16px] lg:text-[20px] xl:text-[24px] font-regular text-textLight dark:text-textDark leading-[19px] lg:leading-[23px] xl:leading-[27px]">
          Watch how we connect buyers and suppliers through an intuitive,
          data-driven platform.{" "}
        </p>

        <img
          width={"0"}
          height={"0"}
          alt="video"
          src="/images/video.png"
          className="w-full  mt-[32px] object-scale-down"
        />
      </div>
    </div>
  );
};

export default About;
