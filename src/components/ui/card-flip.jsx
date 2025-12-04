"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, Repeat2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import GlareHover from "./glare-hover";

export default function CardFlip({
  title = "",
  description = "",
  features = [],
  onClickFunc = {},
  imageSrc={},
  btnName="Live Preview",
  alt="",
  aspectRatio = "aspect-video",
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-full group [perspective:2000px] aspect-[4/5] sm:aspect-[3/4]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden border  rounded-[10px]",
            "border ",
            "shadow-lg",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="relative w-full h-full flex flex-col gap-4 justify-between overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-white leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]">
                {title}
              </h3>
              <p className="text-sm tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] delay-[50ms]">
                {description}
              </p>
              <div className="flex mt-3 xl:mt-5">
                <button
                  className="text-neutral-300 border-neutral-300 flex border  transition-colors duration-300 rounded-xs justify-center items-center overflow-hidden cursor-pointer"
                  onClick={() => setOpenProject(projects.digitalAgency)}
                >
                  <GlareHover
                    glareOpacity={0.4}
                    className={`relative px-[22px] py-[10px] gap-3 z-[5] flex flex-row justify-center items-center whitespace-nowrap`}
                  >
                    <span>
                      <BookOpen width={20} height={20} />
                    </span>
                    View Details
                  </GlareHover>
                </button>
              </div>
            </div>
              <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
                <Image
                  src={imageSrc}
                  alt={alt}
                  className="relative w-full h-full object-cover z-1"
                />
              </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "p-6 rounded-2xl",
            "bg-gradient-to-b from-pink-950 to-black",
            "border border-neutral-600",
            "shadow-lg",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                {title}
              </h3>
              <p className="text-sm tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
                {description}
              </p>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-neutral-300 transition-all duration-500"
                  style={{
                    transform: isFlipped
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <ArrowRight className="w-3 h-3 text-accentColor2" />
                  <span>{feature}</span>
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
                <ArrowRight className="relative z-10 w-4 h-4 text-accentColor2 transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scale {
          0% {
            transform: scale(2);
            opacity: 0;
            box-shadow: 0px 0px 50px rgba(81, 112, 255, 0.5);
          }
          50% {
            transform: translate(0px, -5px) scale(1);
            opacity: 1;
            box-shadow: 0px 8px 20px rgba(255, 102, 196, 0.5);
          }
          100% {
            transform: translate(0px, 5px) scale(0.1);
            opacity: 0;
            box-shadow: 0px 10px 20px rgba(255, 102, 196, 0);
          }
        }
      `}</style>
    </div>
  );
}
