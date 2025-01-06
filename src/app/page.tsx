import { TypewriterEffectSmoothIntro } from "@/components/ikaros-smoothintro";
import { ScreenScroll } from "@/components/ikaros-displayscroll";
import { TraditionalProblem } from "@/components/ikaros-problems";
import { BrandSparkles } from "@/components/ikaros-brand";
import { SolutionCards } from "@/components/ikaros-wobblecard";
import { SpotlightQuestion } from "@/components/ikaros-spotlight";
import { FlipEmotions } from "@/components/ikaros-flipwords";
import { Hero } from "@/components/ikaros-hero";
import { CityImagesSlider } from "@/components/ikaros-city";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BTLText } from "@/components/ikaros-btl";
import WavyText from "@/components/ui/wavy-text";
import { Boxes } from "@/components/ui/background-boxes";
import { SolutionCardHover } from "@/components/ikaros-solution";
export default function Home() {
  return (
    <div>
      <AuroraBackground >
        <TypewriterEffectSmoothIntro />
      </AuroraBackground>

      <main className="flex min-h-screen flex-col items-center justify-between p-20 overflow-x-hidden">
        <div className="w-screen">
          <ScreenScroll />
        </div>
        <div>
          <h1 className="ml-5 md:ml-0 text-4xl font-semibold text-black dark:text-white">
            The Problem with Traditional Advertising</h1>
          <TraditionalProblem />
        </div>
        <div id="whyIkaros" className="w-screen md:w-full" >
          <FlipEmotions />
        </div>
        <div>
          <h1 className="ml-5 md:ml-0 text-4xl md:text-[6rem] font-bold mt-1 leading-none ">
            The IKAROS Advantage</h1>

          <br />
          {/* <OurSolution /> */}
          <SolutionCards />
          {/* <SolutionCardHover />   */}
        </div>
        <br />
        <div className="md:w-full w-screen">
          <div className="p-5  !bg-slate-200 flex flex-col items-center justify-center rounded-lg">
            <div className="text-4xl md:text-[5rem] font-bold text-black mb-5">
              Below-the-Line (BTL) activities
            </div>

            <BTLText />
            <div>
              <SolutionCardHover />
            </div>
          </div>
        </div>
        <br />
        <div className="mx-5 flex flex-col items-center md:flex md:flex-row ">
          <BrandSparkles />
          <SpotlightQuestion />
        </div>
        <br />
        <br />
        <div className="mx-5 flex flex-col items-center md:flex md:flex-row md:w-full w-screen">
          <CityImagesSlider />
          <Hero />
        </div>
        <br />
        <div>

        </div>
      </main>
    </div>
  );
}
