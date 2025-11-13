"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Repeat2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import mailNotification from "../../../public/images/portfolio/mail-notification.png";

export default function CardFlip({
  title = "Full Stack Ecommerce Application with Next JS",
  subtitle = "Hover on the card to see more details.",
  description = "Lumivance is an open-source Next.js eCommerce frontend project. It provides a modern, fast and customizable shopping UI.",
  features = [
    "Server-side-rendering with Next JS",
    "Modern UI experience with Tailwind CSS",
    "Full stack integeration",
    "User authentication is managed by Clerk",
    "Secured database hosted on MongoDB",
    "Full responsive interface",
  ],
  onClickFunc = {}
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
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
            <div className="absolute inset-0 flex items-start justify-center pt-24">
              <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "absolute w-[100px] h-[100px]",
                      "rounded-[140px]",
                      "animate-[scale_3s_linear_infinite]",
                      "opacity-0",
                      "shadow-[0_0_50px_rgba(81,112,255,0.5)]",
                      "group-hover:animate-[scale_2s_linear_infinite]"
                    )}
                    style={{
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
                <div className="absolute w-32 h-32 overflow-hidden">
                  <Image
                    src={mailNotification}
                    alt="main notification"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center justify-between gap-5">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px]">
                  {title}
                </h3>
                <p className="text-sm text-neutral-300 line-clamp-2 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] delay-[50ms]">
                  {subtitle}
                </p>
              </div>
              <div className="relative group/icon">
                <div
                  className={cn(
                    "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                    "bg-gradient-to-br from-accentColor2/20 via-accentColor2/10 to-transparent"
                  )}
                />
                <Repeat2 className="relative z-10 w-4 h-4 text-accentColor2 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "p-6 rounded-2xl",
            "bg-gradient-to-b from-zinc-900 to-black",
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
              <p className="text-sm text-neutral-300 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px]">
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
                "p-3 -m-3 rounded-xl",
                "transition-all duration-300",
                "bg-gradient-to-r",
                "from-zinc-800 via-zinc-800 to-zinc-800",
                "hover:from-accentColor2/20 hover:from-0% hover:via-accentColor2/10 hover:via-100% hover:to-transparent hover:to-100%",
                "hover:scale-[1.02] hover:cursor-pointer"
              )} onClick={onClickFunc}
            >
              <span className="text-sm font-medium text-white transition-colors duration-300 group-hover/start:text-accentColor2">
                Live Preview
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
