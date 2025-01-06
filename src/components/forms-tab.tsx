"use client";

import { Tabs } from "./ui/tabs";
import { PartnerForm } from "./partner-form";
import { BackgroundBeams } from "./ui/background-beam";
import { AdvertiserForm } from "./advertiser-form";



export function FormTab() {
  const tabs = [
    {
      title: "Advertiser",
      value: "advertiser",
      content: (
        <div className="w-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="relative contact-form">
            <AdvertiserForm />
          </div>
        </div>
      ),
    },
    {
      title: "Partner",
      value: "partner",
      content: (
        <div className="w-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="relative contact-form">
            <PartnerForm />
          </div>
        </div>
      ),
    },

  ];

  return (
    <>
      <div className="z-10">
        <BackgroundBeams />
      </div>
      <div className=" z-30 mb-[150px] md:mb-[200px] h-[80rem] md:h-[62rem] [perspective:1000px] relative b flex flex-col  mx-auto w-full items-center justify-center ">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}

