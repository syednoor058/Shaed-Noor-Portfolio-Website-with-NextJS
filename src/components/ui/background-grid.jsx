"use client";

import { useTheme } from "next-themes";
import React from "react";

export default function ThemedGridBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Wait until client-side hydration is complete
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  const strokeColor = resolvedTheme === "dark" ? "#262626" : "#262626";

  return (
    <svg
      className="absolute inset-0 w-full h-full z-[0]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke={strokeColor}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      {/* Lines */}
      <line
        x1="0"
        y1="20%"
        x2="100%"
        y2="20%"
        className="grid-line"
        style={{ animationDelay: "0.5s" }}
      />
      <line
        x1="0"
        y1="80%"
        x2="100%"
        y2="80%"
        className="grid-line"
        style={{ animationDelay: "1s" }}
      />
      <line
        x1="20%"
        y1="0"
        x2="20%"
        y2="100%"
        className="grid-line"
        style={{ animationDelay: "1.5s" }}
      />
      <line
        x1="80%"
        y1="0"
        x2="80%"
        y2="100%"
        className="grid-line"
        style={{ animationDelay: "2s" }}
      />
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        className="grid-line"
        style={{ animationDelay: "2.5s", opacity: 0.05 }}
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        className="grid-line"
        style={{ animationDelay: "3s", opacity: 0.05 }}
      />
    </svg>
  );
}
