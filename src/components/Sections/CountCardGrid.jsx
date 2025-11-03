"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CountUpCard } from "../Cards/cards";

export default function CountCardGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until client-side hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  const shapeColor1 = resolvedTheme === "dark" ? "#A3E635" : "#A3E635";
  const shapeColor2 = resolvedTheme === "dark" ? "#06b6d4" : "#06b6d4";
  const shapeColor3 = resolvedTheme === "dark" ? "#7C3AED" : "#7C3AED";
  const shapeColor4 = resolvedTheme === "dark" ? "#d53f8c" : "#d53f8c";

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-4 lg:px-0 py-10 lg:py-20">
      <div className="flex justify-center items-center">
        <CountUpCard
          name="Happy Clients Worldwide"
          number={10}
          symbol="+"
          icon={
            <svg
              className="scale-x-[-1]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
            >
              <path
                d="M240.2 240A240 240 0 0 0 480 0H240a240 240 0 1 0 0 480h240a240 240 0 0 0-239.8-240Z"
                fill={shapeColor1}
              ></path>
            </svg>
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <CountUpCard
          name="Years of Experience"
          number={2}
          symbol="+"
          icon={
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
            >
              <path
                d="M480 240H0a240 240 0 1 1 480 0ZM480 480H0a240 240 0 1 1 480 0Z"
                fill={shapeColor2}
              ></path>
            </svg>
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <CountUpCard
          name="Customer Satisfaction"
          number={100}
          symbol="%"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
              <path
                d="M480 240H240V0a240 240 0 0 1 240 240ZM240 480H0V240a240 240 0 0 1 240 240ZM480 480H240V240a240 240 0 0 1 240 240ZM240 240H0V0a240 240 0 0 1 240 240Z"
                fill={shapeColor3}
              ></path>
            </svg>
          }
        />
      </div>
      <div className="flex justify-center items-center">
        <CountUpCard
          name="Projects Completed"
          number={16}
          symbol="+"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
              <path
                d="M240 0H0a240 240 0 0 0 240 240h240A240 240 0 0 0 240 0ZM240 240H0a240 240 0 0 0 240 240h240a240 240 0 0 0-240-240Z"
                fill={shapeColor4}
              ></path>
            </svg>
          }
        />
      </div>
    </div>
  );
}
