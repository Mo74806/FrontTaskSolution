"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Options from "./Options";
import ClientReview from "./ClientReview";

const Suppliers = () => {
  return (
    <div
      style={{ backgroundSize: "contain" }}
      className="relative   bg-no-repeat bg-bottom bg-[url('/images/footer.png')] pb-[100px]"
    >
      <div className=" xl:px-[100px] sm:px-[50px] px-[20px]  z-[10]">
        <div className="flex flex-col lg:flex-row items-center mt-[55px]">
          <div className="flex flex-col col-auto">
            <h4 className=" text-[32px] lg:text-[48px]  xl:text-[64px] leading-[32px] lg:leading-[41px] xl:leading-[65px] text-textLight dark:text-textDark font-extrabold">
              Data Center Supplier
            </h4>
            <span className="text-[20px] font-regular text-textLight dark:text-textDark leading-[27px] mt-[12px]">
              Be the Go-To Supplier for Global Data Center Giants
            </span>
          </div>

          <div className="flex flex-col col ms-auto">
            <Button className="py-[16px] bg-[#143AA2] text-white px-[30px] relative">
              Talk to an Expert{" "}
              <Image
                src="/images/Arrow up-right.png"
                alt="arrow"
                width={12}
                height={12}
                className="absolute right-[10px]"
              />
            </Button>
          </div>
        </div>
        <Options />
        <div className="flex flex-row  items-center mt-[95px]">
          <div className="flex flex-col col-auto">
            <h4 className=" text-[32px] lg:text-[48px]  xl:text-[64px] leading-[32px] lg:leading-[41px] xl:leading-[65px] text-textLight dark:text-textDark font-extrabold">
              Trusted by Industry Leaders
            </h4>
            <span className="text-[14px] lg:text-[16px] xl:text-[20px] font-regular text-textLight dark:text-textDark leading-[27px] mt-[12px]">
              Join hundreds of companies worldwide that trust us to power their
              business{" "}
            </span>
          </div>
        </div>
        <div className="flex gap-x-[20px] mt-[41px]">
          <Button className="py-[16px] bg-[#143AA2] text-white px-[25px] lg:px-[40px] xl:px-[60px] ">
            Buyers
          </Button>
          <Button className="py-[16px] bg-white text-textLight px-[25px] lg:px-[40px] xl:px-[60px] ">
            Suppliers
          </Button>
        </div>
        <div className="bg-white justify-between gap-2 lg:gap-3  mt-[18px] p-[20px] lg:p-[31px] xl:p-[41px] rounded-[16px] grid grid-cols-2  lg:grid-cols-4 xl:grid-cols-6">
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
          <Image
            src="/images/company.png"
            width={142}
            height={78}
            alt="company_logo"
          />
        </div>

        <div className="flex flex-col mt-[85px]">
          <h4 className=" text-[32px] lg:text-[48px]  xl:text-[64px] leading-[32px] lg:leading-[41px] xl:leading-[65px] text-textLight dark:text-textDark font-extrabold">
            What Our Clients Say
          </h4>
          <div className="flex flex-row mt-[85px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[32px] gap-y-[32px]">
              {[0, 1, 2].map((index) => (
                <ClientReview key={index} index={index} />
              ))}
            </div>
          </div>
          <div className="mt-[60px] bg-[#143AA2] flex flex-col lg:flex-row  z-[2] items-center rounded-[26px] px-[20px] lg:px-[30px] xl:px-[41px] py-[20px] lg:py-[30px] xl:py-[46px]">
            <div className=" lg:w-auto">
              <h2 className="text-white  text-[20px] lg:text-[28px] xl:text-[36px] font-bold ">
                Empower growth with AI: matching,
                <br /> compliance, cost-efficiency, and
                <br /> sustainable success.
              </h2>
              <p className="text-white text-[14px] lg:text-[16px] xl:text-[20px] font-regular ">
                Join hundreds of companies worldwide that trust us to power
                their business
              </p>
            </div>
            <div className=" flex-grow-1  text-center">
              <Button
                variant={"secondary"}
                className="bg-white mt-3 lg:mt-0 text-[20px] lg:text-[24px] xl:text-[32px] text-[#143AA2] px-[10px] lg:px-[39px]  xl:px-[59px] py-[11px]  font-bold"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
