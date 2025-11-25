"use client";

import { Github, MoveRight, PartyPopper } from "lucide-react";
import { useEffect, useRef } from "react";
import { PrimaryButton, SecondaryButton } from "../Buttons/buttons";
import ThemedGridBackground from "./background-grid";
import { Spotlight } from "./spotlight-new";
import { TextLoop } from "./text-loop";
import { TextShimmer } from "./text-shimmer";

const colors = {
  50: "#f8f7f5",
  100: "#e6e1d7",
  200: "#c8b4a0",
  300: "#a89080",
  400: "#8a7060",
  500: "#6b5545",
  600: "#544237",
  700: "#3c4237",
  800: "#2a2e26",
  900: "#1a1d18",
};

export default function MinimalHero() {
  const gradientRef = useRef(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Word hover effects
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(200, 180, 160, 0.5)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });

    // Click ripple effect
    function onClick(e) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(200, 180, 160, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }
    document.addEventListener("click", onClick);

    // Floating elements on scroll
    let scrolled = false;
    function onScroll() {
      if (!scrolled) {
        scrolled = true;
        document.querySelectorAll(".floating-element").forEach((el, index) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
          }, index * 200);
        });
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className=" bg-neutral-950  text-[#e6e1d7] font-primary overflow-hidden relative w-full px-4 pt-16 md:px-10 lg:px-20 md:pt-24">
      <ThemedGridBackground />

      {/* Corner elements */}
      <div
        className="corner-element top-8 left-8"
        style={{ animationDelay: "4s" }}
      >
        <div
          className="absolute top-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element top-8 right-8"
        style={{ animationDelay: "4.2s" }}
      >
        <div
          className="absolute top-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element bottom-8 left-8"
        style={{ animationDelay: "4.4s" }}
      >
        <div
          className="absolute bottom-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div
        className="corner-element bottom-8 right-8"
        style={{ animationDelay: "4.6s" }}
      >
        <div
          className="absolute bottom-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>

      {/* Floating elements */}
      <div
        className="floating-element"
        style={{ top: "25%", left: "15%", animationDelay: "5s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "40%", left: "10%", animationDelay: "6s" }}
      ></div>
      <div
        className="floating-element"
        style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}
      ></div>

      <div className="w-full flex justify-center">
        <div className="max-w-4xl relative z-10 flex flex-col md:items-center gap-5 lg:gap-7">
          {/* Top tagline */}
          <div className="md:text-center flex">
            <h2 className="w-full text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase flex flex-row gap-4 items-center border border-neutral-500 p-2 rounded-xs">
              <span className="p-2 rounded-xs bg-gradient-to-tr from-violet-600 to-sky-600 text-[#fff]">
                <PartyPopper width={18} height={18} />
              </span>
              Welcome to my portfolio website
            </h2>
          </div>

          {/* Main headline */}
          <div className="md:text-center max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight  text-[#fff] flex flex-col gap-5">
              <div>
                <span>Hi, this is </span>{" "}
                <TextShimmer
                  className="text-3xl md:text-4xl lg:text-5xl font-bold  [--base-color:var(--color-sky-600)] [--base-gradient-color:var(--color-violet-100)]"
                  delay={1.2}
                >
                  Syed Shaeduzzaman Noor
                </TextShimmer>
              </div>
              <div className="text-xl md:text-3xl lg:text-4xl flex justify-center items-center">
                <div className="w-full flex flex-row gap-3">
                  <span className="lg:w-[50%] text-end text-neutral-400 font-normal">
                    I am an expert{" "}
                  </span>
                  <TextLoop
                    className="lg:w-[50%] text-start  text-neutral-200 font-bold"
                    data-delay="3000"
                  >
                    <span className="">Software Engineer</span>
                    <span className="">Full-Stack Developer</span>
                    <span className="">DevOps Engineer</span>
                  </TextLoop>
                </div>
              </div>
            </h1>
          </div>

          {/* Bottom tagline */}
          <div className="md:text-center">
            <p className="lg:text-xl">
              I specialize in building sleek, high-performance websites and
              applications with a user-first approach — blending creativity,
              functionality, and strategy to help businesses grow online.
            </p>
            <div
              className="mt-3 flex justify-center space-x-4 opacity-0"
              style={{
                animation: "word-appear 1s ease-out forwards",
                animationDelay: "4.5s",
              }}
            >
              <div
                className="w-1 h-1 rounded-full opacity-40"
                style={{ background: colors[200] }}
              ></div>
              <div
                className="w-1 h-1 rounded-full opacity-60"
                style={{ background: colors[200] }}
              ></div>
              <div
                className="w-1 h-1 rounded-full opacity-40"
                style={{ background: colors[200] }}
              ></div>
            </div>
          </div>

          {/* Buttons  */}
          <div className="w-full flex flex-row gap-5 justify-center">
            <PrimaryButton
              text="Let's Connect"
              url="/#contact"
              icon={<MoveRight width={20} height={20} />}
            />
            <SecondaryButton
              text="Github"
              url="https://github.com/syednoor058"
              icon={<Github width={20} height={20} />}
            />
          </div>
        </div>
      </div>

      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{
          background: `radial-gradient(circle, ${colors[500]}0D 0%, transparent 100%)`,
        }}
      ></div>

      <div className="w-full h-full absolute inset-0 z-[1] flex items-end">
        <div className="w-full h-[200px] bg-gradient-to-t  from-[#0a0a0a] to-transparent"></div>
      </div>
      <Spotlight />
    </div>
  );
}
