import React from "react";
import { Spotlight } from "./ui/Spotlight";

export function SpotlightQuestion() {
  return (
    <div className="h-[40rem] w-3/4 md:w-full rounded-md flex md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />  
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        Illuminate your brand with the power of Ikaros&apos; cutting-edge digital screens,
         capturing attention and captivating audiences. 
        Are you ready to make your mark in the world of marketing and advertising?
        </p>
      </div>
    </div>
  );
}
