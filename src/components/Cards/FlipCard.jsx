"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  RotateCcwSquare,
  SquareArrowOutUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlareHover from "../ui/glare-hover";

export default function FlipCard({
  title = "",
  description = "",
  features = [],
  imageSrc = "",
  alt = "",
  btnName = "View Details",
  onClickFunc = () => {},
  aspectRatio = "aspect-video",
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-full mx-auto group [perspective:1200px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)} // mobile support
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700",
          "[transform-style:preserve-3d]",

          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* FRONT */}
        <div
          className={cn(
            "w-full h-full shadow-lg overflow-hidden",
            "bg-gradient-to-b from-zinc-900 to-black",
            "border rounded-[10px]",
            "p-5",
            "[backface-visibility:hidden]",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            "flex flex-col gap-4 justify-between"
          )}
        >
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm">{description}</p>
            <div className="flex mt-3 xl:mt-5">
              <button className="text-neutral-300 border-neutral-300 flex border  transition-colors duration-300 rounded-xs justify-center items-center overflow-hidden cursor-pointer">
                <GlareHover
                  glareOpacity={0.4}
                  className={`relative px-[22px] py-[10px] gap-3 z-[5] flex flex-row justify-center items-center whitespace-nowrap`}
                >
                  <span>
                    <RotateCcwSquare width={20} height={20} />
                  </span>
                  View Details
                </GlareHover>
              </button>
            </div>
          </div>

          {imageSrc && (
            <div className={`w-full ${aspectRatio} relative overflow-hidden`}>
              <Image src={imageSrc} alt={alt} fill className="object-cover" />
            </div>
          )}
        </div>

        {/* BACK */}
        <div
          className={cn(
            "absolute inset-0 w-full p-5",
            "bg-gradient-to-b from-pink-950 to-black",
            "border rounded-2xl",
            "[transform:rotateY(180deg)]",
            "[backface-visibility:hidden]",
            "flex flex-col justify-between"
          )}
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-zinc-400 mb-4">{description}</p>

            <div className="space-y-2 mt-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <ArrowRight className="w-3 h-3 text-accentColor2" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-neutral-800">
            <div
              className={cn(
                "group/start relative",
                "flex items-center justify-between",
                "p-3 border border-white bg-white hover:bg-transparent",
                "transition-all duration-300",
                "hover:from-accentColor2/20 hover:from-0% hover:via-accentColor2/10 hover:via-100% hover:to-transparent hover:to-100%",
                "hover:scale-[1.02] hover:cursor-pointer",
                "text-neutral-950 hover:text-white"
              )}
              onClick={onClickFunc}
            >
              <span className=" transition-colors duration-300 group-hover/start:text-accentColor2">
                {btnName}
              </span>
              <div className="relative group/icon">
                <div
                  className={cn(
                    "absolute inset-[-6px] rounded-lg transition-all duration-300",
                    "bg-gradient-to-br from-accentColor2/20 via-accentColor2/10 to-transparent",
                    "opacity-0 group-hover/start:opacity-100 scale-90 group-hover/start:scale-100"
                  )}
                />
                <SquareArrowOutUpRight className="relative z-10 w-4 h-4 text-accentColor2 transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
