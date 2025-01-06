"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Competitor Interference",
    description:
      "One of the primary challenges with paper ads in India is the risk of competitor interference. With limited control over physical advertisements, your investment can easily go to waste if your ads are covered or replaced by competitors. This not only diminishes the visibility of your brand but also hampers the effectiveness of your marketing efforts in a highly competitive market.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/Designer.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> 
      </div>
    ),
  },
  {
    title: "Slow Deployment",
    description:
      "Changing paper ads in India can be a slow and labor-intensive process. This not only leads to delays in updating your advertising content but also introduces inefficiencies in your marketing campaigns. In a fast-paced business landscape, where market trends and consumer preferences evolve rapidly, delayed deployment can often result in missed opportunities and a failure to stay ahead of the competition.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/slow_deploy.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> 
        
      </div>
    ),
  },
  {
    title: "Static Content",
    description:
      "Indian businesses face the challenge of adapting to the dynamic market landscape. With traditional paper ads, you are limited to displaying one message for extended periods, making it difficult to keep up with evolving market trends or update your content to reflect new promotions, offers, or product launches. This lack of agility can hinder your ability to engage with your target audience effectively.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/limitedspace.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> 
      </div>
    ),
  },
  {
    title: "High Paper Waste",
    description:
      "In a country as vast and populous as India, traditional advertising methods contribute to significant paper waste. This not only harms the environment but also adds to the overall costs associated with printing and distributing paper ads. As sustainability becomes a growing concern for businesses and consumers alike, the need for eco-friendly advertising solutions has never been more pressing.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <Image
          src="/wastage.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> 
      </div>
    ),
  },
  {
    title: "Lack of Analytics",
    description:
      "Tracking the performance of traditional paper ads in India presents unique challenges. Limited access to accurate data and insights makes it difficult to measure the return on investment (ROI) of your advertising efforts. Without reliable analytics, you may struggle to optimize your campaigns, target the right audience, and make data-driven decisions that maximize your marketing effectiveness.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/lackofanalytics.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> 
      </div>
    ),
  },
];
export function TraditionalProblem() {
  return (
    <div className="md:p-10 md:w-fit w-screen p-5">
      <StickyScroll content={content} />
    </div>
  );
}
