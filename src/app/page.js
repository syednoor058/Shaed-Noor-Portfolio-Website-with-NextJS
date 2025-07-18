import MinimalHero from "@/components/ui/minimal-hero";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import circleShape from "../../public/images/shapes/circle-shape.webp";
import roundSquareShape from "../../public/images/shapes/round-square-shape.webp";
import squareShape from "../../public/images/shapes/square-shape.webp";
import uShape from "../../public/images/shapes/u-shape.webp";
import CountUpCard from "../components/Cards/cards";

export default function Home() {
  return (
    <>
      <main>
      <div className="w-full relative ">
        <MinimalHero />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-4 lg:px-0 py-10 lg:py-20">
        <div className="flex justify-center items-center">
        <CountUpCard name="Happy Clients Worldwide" number={10} symbol="+" imgSrc={roundSquareShape} alt="round square shape" />
        </div>
        <div className="flex justify-center items-center">
        <CountUpCard name="Years of Experience" number={2} symbol="+" imgSrc={circleShape} alt="cicle shape" />
        </div>
        <div className="flex justify-center items-center">
        <CountUpCard name="Customer Satisfaction" number={100} symbol="%" imgSrc={uShape} alt="u shape" />
        </div>
        <div className="flex justify-center items-center">
        <CountUpCard name="Projects Completed" number={16} symbol="+" imgSrc={squareShape} alt="square shape" />
        </div>
      </div>
        <div className="h-screen absolute z-[50] top-5 right-5 flex">
          <ThemeToggleButton />
        </div>
        
      </div>

     
      </main>
    </>
  );
}
