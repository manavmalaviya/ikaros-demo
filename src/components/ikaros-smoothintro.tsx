"use client";
import { useState, useEffect } from 'react';
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function TypewriterEffectSmoothIntro() {
  const sentences = [
    [
      { text: "Capture" },
      { text: "Attention" },
      { text: "Like" },
      { text: "Never" },
      { text: "Before" },
      { text: "with" },
      { text: "IKAROS.", className: "text-blue-500 dark:text-blue-500" },
    ],
    [
      { text: "Elevate" },
      { text: "Your" },
      { text: "Marketing" },
      { text: "with" },
      { text: "IKAROS", className: "text-blue-500 dark:text-blue-500" },
      { text: "Digital" },
      { text: "Screens." },

    ],
    [
      { text: "Innovate" },
      { text: "Your" },
      { text: "Marketing" },
      { text: "Strategy" },
      { text: "Today" },
      { text: "with" },
      { text: "IKAROS.", className: "text-blue-500 dark:text-blue-500" },
    ],
    // Add more sentences as needed
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000); // Change sentence every 5 seconds

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] z-30">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        Discover the Future of Advertising
      </p>
      <TypewriterEffectSmooth
        key={currentSentenceIndex} 
        words={sentences[currentSentenceIndex]}
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href={"/contact-us"} className="w-40 h-10 cursor-pointer flex justify-center items-center rounded-xl bg-black border dark:border-white border-transparent text-white text-sm" >
          <span>
            Join now
          </span>
        </Link>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm" onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector("#whyIkaros");
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top,
              behavior: 'smooth'
            });
          }
        }}>
          Why Ikaros?
        </button>
      </div>
    </div>
  );
}
