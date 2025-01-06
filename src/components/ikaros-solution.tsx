"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
    {title: "30% Higher Recall",
    description:
      "Forget forgotten flyers! digital screens in bricks and mortar shops grab attention, boosting ad recall by 30% compared to traditional BTL methods.",
      link: "https://ikaros.live/contact-us",
    },
    {
      title: "25% ROI Boost",
      description:
        "Stop guessing! real-time analytics let you track and optimize campaigns, leading to an average 25% improvement in your BTL campaign ROI.",
      link: "https://ikaros.live/contact-us",
      
    },
    {
      title: "Instant Deployment",
      description:
        "Time is money! Deploy new BTL campaigns across our entire network instantly with just a few clicks, maximizing campaign agility.",
        link: "https://ikaros.live/contact-us",
    },
    {
      title: "Eco-Friendly Advantage",
      description:
        "Go green! eliminates paper waste associated with traditional BTL, promoting a sustainable advertising approach.",
        link: "https://ikaros.live/contact-us",
    },
  ];

const content = [
  {
    title: "Guaranteed Ad Visibility",
    description:
      "With our state-of-the-art digital screens, your ads are guaranteed to remain prominently displayed, free from competitor interference. This ensures that your brand message reaches your target audience without any distractions, maximizing the impact of your advertising investment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Image related to Guaranteed Ad Visibility
      </div>
    ),
  },
  {
    title: "Instant Ad Deployment",
    description:
      "Our digital advertising platform enables you to deploy new ads instantly across multiple locations in India with just a few clicks. Say goodbye to the time-consuming and labor-intensive process of changing paper ads. With our solution, you can quickly and efficiently update your advertising content, ensuring that your campaigns are always up-to-date and responsive to market trends.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
        Image related to Instant Ad Deployment
      </div>
    ),
  },
  {
    title: "Dynamic Ad Content",
    description:
      "In the dynamic Indian market, agility is key to staying ahead of the competition. With our digital screens, you can update your ads within hours or even multiple times a day. This flexibility empowers you to adapt to changing market trends, launch timely promotions, and engage with your audience in a more relevant and personalized manner.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Image related to Dynamic Ad Content
      </div>
    ),
  },
  {
    title: "Eco-Friendly Advertising",
    description:
      "As sustainability takes center stage in India, our digital screens offer an eco-friendly alternative to traditional paper ads. By eliminating paper waste completely, you can contribute to a greener environment while reducing costs associated with printing and distribution. Show your commitment to sustainability and resonate with environmentally-conscious consumers in India.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Image related to Eco-Friendly Advertising.
      </div>
    ),
  },
  {
    title: "Real-Time Analytics",
    description:
      "With the Ikaros Advantage, you gain access to real-time analytics and insights into the performance of your ads. Track key metrics, measure ROI, and make data-driven decisions that optimize your advertising campaigns. By understanding the effectiveness of your marketing efforts, you can continuously refine your strategies to achieve better results and maximize your return on investment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Image related to Real-Time Analytics
      </div>
    ),
  },
];
export function OurSolution() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export function SolutionCardHover() {
    return (
      <div className="max-w-5xl mx-auto px-4">
        <HoverEffect items={projects} />
      </div>
    );
  }
