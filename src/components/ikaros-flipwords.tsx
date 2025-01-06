import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipEmotions() {
  const words = [ "Visibility", "Efficiency", "Flexibility", "Sustainability", "Insights"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Unlock the power of 
        <strong><FlipWords words={words} /></strong> <br />
        with Ikaros&apos; innovative digital advertising solutions.
      </div>
    </div>
  );
}
