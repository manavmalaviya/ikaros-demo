"use client";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

export function SolutionCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto md:w-full w-screen px-5 md:px-0">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-green-600 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="flex flex-col md:flex md:flex-row md:justify-between">

          <div className="max-w-xs mb-5 md:mb-0" >
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Ensured Ad Prominence
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Digital screens ensure that your ads remain prominently displayed and visible at all times, eliminating the risk of being overshadowed by competitors.
            </p>
          </div>
          <Image
            className="max-w-xs  object-contain !static"
            src="/assurance.svg"
            alt="assurance image"
            fill
          />
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Rapid Ad Deployment

        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          With our digital solution, you can deploy new ads instantly across multiple locations with just a few clicks. Our screens are strategically placed in high footfall areas, maximizing your ad&apos;s reach and impact.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-yellow-600 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] w-full ">
        <div className="flex flex-col md:flex-row md:flex md:justify-between">
          <div className="max-w-md mb-5 md:mb-0">

            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Flexible Ad Scheduling
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-lg text-neutral-200">
              Dynamic ad content, enabling you to change your ads within hours or even throughout the day. This flexibility helps you stay relevant and responsive to market trends and customer needs.
            </p>
          </div>
          <Image
            fill
            src="/booked.svg"
            alt="realtime analytics image"
            className="max-w-sm  object-contain !static"
          />

        </div>

      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Sustainable Digital Ads

        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Our digital ad screens offer a sustainable alternative, completely eliminating paper waste. This eco-friendly approach not only helps the environment but also aligns with modern consumers&apos; values.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-500 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="flex flex-col md:flex-row md:flex md:justify-between">

          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Real-Time Insights
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              We provide seamless tracking of outlet analytics, giving you real-time insights into your ad performance. Make informed decisions with precise data at your fingertips, enhancing the effectiveness of your marketing strategies.
            </p>
          </div>
          <Image
            fill
            src="/realtimeanalytics.svg"
            alt="realtime analytics image"
            className="max-w-xs  object-contain !static"
          />
        </div>

      </WobbleCard>
    </div>
  );
}
