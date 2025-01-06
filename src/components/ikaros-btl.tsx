"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Below-the-Line (BTL) activities are crucial for reaching your target audience and driving sales. However, traditional BTL methods like print ads and flyers often face limitations.  IKAROS offers a modern solution that overcomes these challenges and optimizes your BTL campaigns.
`;

export function BTLText() {
  return <TextGenerateEffect words={words} />;
}
