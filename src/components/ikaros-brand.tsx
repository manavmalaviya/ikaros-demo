"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Image from "next/image";

export function BrandSparkles() {
  return (
    <div className="h-[40rem] w-3/4 md:w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="relative w-[15rem] h-[5rem]">
        <Image
          src="/ikaros.svg"
          width={350}
          height={300}
          layout="fixed"
          objectFit="contain"
          alt="ikarosbrand"
        />
      </div>
      <div className="md:w-[40rem] w-[30rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
