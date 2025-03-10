import Image from "next/image";
import React from "react";
import { TitleDescription } from "./type";
import { gilroyMedium, gilroySemiBold } from "@/app/fonts";
import { ArrowIcon } from "./Icons";
import Link from "next/link";

interface ServicesProps {
  title: string;
  description: string;
  details: {
    title: string;
    url: string;
  };
  imageURL: string;
  subServices: TitleDescription[];
}

const Service: React.FC<ServicesProps> = ({
  title,
  description,
  details,
  imageURL,
  subServices,
}) => {
  return (
    <div className="flex lg:flex-row flex-col gap-3 items-center justify-between">
      <div className="flex flex-col items-center lg:justify-start  gap-5 py-5 px-4 ">
        <div className="flex flex-col lg:text-left text-center gap-5">
          <p
            className={`${gilroySemiBold.className} lg:text-[36px] md:text-[30px] text-[26px] text-primary`}
          >
            {title}
          </p>
          <p
            className={`${gilroyMedium.className} lg:text-[18px] md:text-[16px] text-[15px] text-charcoal`}
          >
            {description}
          </p>
        </div>
        <div className="hidden lg:flex mt-auto self-start">
          <button className="bg-primary font-semibold text-white py-[10px] px-[24px] rounded-full flex items-center gap-2 justify-start cursor-pointer">
            <Link href="#contact-us">{details.title}</Link>
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-3 items-center justify-center md:justify-between">
        {/* Image container with full height */}
        <div className="sm:w-[345px] sm:h-[240px] w-[300px] h-[200px] md:w-[395px] md:h-full rounded-full">
          <Image
            loading="eager"
            src={imageURL}
            alt="a woman rating 5 stars on a customer service machine"
            width={261}
            height={490}
            className="rounded-3xl w-full h-full object-cover object-center"
          />
        </div>

        {/* Text container, centered and height-restricted */}
        <div className="flex flex-col justify-center px-[32px] md:h-full">
          <div className="flex flex-col items-center md:items-start justify-center w-full md:max-h-full">
            {subServices.map((service, index) => (
              <div key={index} className="space-y-[28px] max-w-[320px] w-full">
                <div className="space-y-[14px] w-full">
                  <p
                    className={`${gilroySemiBold.className} text-center md:text-left font-normal lg:text-[24px] md:text-[20px] text-[18px] text-primary`}
                  >
                    {service.title}
                  </p>
                  <p
                    className={`${gilroyMedium.className} text-center md:text-left font-normal lg:text-[16px] md:text-[15px] text-[14px] text-charcoal`}
                  >
                    {service.description}
                  </p>
                </div>
                {index !== subServices.length - 1 && (
                  <div className="h-[1px] mb-[14px] bg-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-4">
        <button className="bg-primary font-semibold text-white py-[10px] px-[24px] rounded-full flex items-center gap-2 justify-start cursor-pointer">
          <Link href="#contact-form">{details.title}</Link>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Service;
