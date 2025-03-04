import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-white text-center  gap-2 lg:gap-3  mt-[18px] p-[20px] lg:p-[31px] xl:p-[41px] rounded-[16px] grid grid-cols-2  lg:grid-cols-4 xl:grid-cols-6">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(
        (index) => (
          <Image
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title={`company${index + 1}`}
            key={index}
            className=" mx-auto  align-middle align-self-center flex h-full object-scale-down"
            src={`/images/company${index + 1}.png`}
            width={142}
            height={78}
            alt="company_logo"
          />
        )
      )}
    </div>
  );
};

export default Sponsors;
