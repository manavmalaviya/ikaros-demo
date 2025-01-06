"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function ScreenScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Get your ads displayed on  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                IKAROS&apos; digital screens
              </span>
            </h1>
          </>
        }
      >

        <div className="overflowy-hidden">
          <Image fill className="   !static" src="/peopleviewing.jpg" alt="ikaros-digital-screen" />
          <Image fill className="   !static" src="/coupleviewing.jpg" alt="ikaros-digital-screen" />
          <Image fill className="  !static" src="/3customer.jpg" alt="ikaros-digital-screen" />
        </div>

      </ContainerScroll>
    </div>
  );
}


