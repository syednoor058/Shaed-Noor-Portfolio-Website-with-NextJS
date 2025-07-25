"use client";

import {
  Bot,
  FolderCode,
  Globe,
  LayoutPanelLeft,
  ShieldCheck,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ServiceCard } from "../Cards/cards";

export default function ServiceCardGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until client-side hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  const spotlightBgColor = resolvedTheme === "dark" ? "#262626" : "#fff";
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
      <ServiceCard
        title="Custom Software Solutions"
        features={[
          "Built for performance, security, and scalability",
          "Designed to automate and optimize tasks",
          "Seamless integration with your systems",
        ]}
        desc="Tailored tools to fit your unique business needs."
        icon={<FolderCode />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Full Stack Web Application"
        features={[
          "React, Next.js, and modern frameworks",
          "REST API / GraphQL integration",
          "Secure user auth & role-based access control",
        ]}
        desc="Dynamic, database-driven applications from frontend to backend."
        icon={<LayoutPanelLeft />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Website Development"
        features={[
          "Clean UI with intuitive UX",
          "Mobile-first responsive layouts through Tailwind CSS",
          "Optimized performance & accessibility",
        ]}
        desc="Pixel-perfect, responsive, and fast-loading websites."
        icon={<Globe />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="WordPress Development"
        features={[
          "Custom themes and plugin development",
          "SEO-friendly and speed optimized",
          "Secure and scalable architecture",
        ]}
        desc="Tailored tools to fit your unique business needs."
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 64 64"
            fill="#fff"
          >
            <path d="M 32 6 C 17.641 6 6 17.641 6 32 C 6 46.359 17.641 58 32 58 C 46.359 58 58 46.359 58 32 C 58 17.641 46.359 6 32 6 z M 32 9 C 44.703 9 55 19.297 55 32 C 55 44.703 44.703 55 32 55 C 19.297 55 9 44.703 9 32 C 9 19.297 19.297 9 32 9 z M 32 12 C 25.195 12 19.180406 15.422859 15.566406 20.630859 C 15.856406 20.630859 16.134766 20.626953 16.384766 20.626953 C 18.505766 20.626953 21.794922 20.375 21.794922 20.375 C 22.885922 20.312 23.008969 21.938266 21.917969 22.072266 C 21.917969 22.072266 20.804031 22.260266 19.582031 22.322266 L 26.958984 44.695312 L 31.384766 31.121094 L 28.25 22.322266 C 27.159 22.259266 26.097656 22.072266 26.097656 22.072266 C 25.006656 22.009266 25.129703 20.312 26.220703 20.375 C 26.220703 20.375 29.578359 20.626953 31.568359 20.626953 C 33.689359 20.626953 36.978516 20.375 36.978516 20.375 C 38.069516 20.312 38.192562 21.938266 37.101562 22.072266 C 37.101562 22.072266 35.979625 22.260266 34.765625 22.322266 L 42.082031 44.568359 L 44.111328 37.65625 C 45.133328 34.96925 45.648438 32.706641 45.648438 30.931641 C 45.648438 28.370641 44.764281 26.650391 43.988281 25.275391 C 42.966281 23.570391 42.021484 22.078047 42.021484 20.373047 C 42.021484 18.624047 43.205359 17.026297 44.943359 16.779297 C 41.451359 13.805297 36.935 12 32 12 z M 49.857422 23.044922 C 49.879422 23.419922 49.888672 23.805031 49.888672 24.207031 C 49.888672 26.304031 49.504562 28.670047 48.351562 31.623047 L 42.517578 48.978516 C 48.198578 45.446516 52 39.167 52 32 C 52 28.778 51.216422 25.742922 49.857422 23.044922 z M 13.660156 24.042969 C 12.597156 26.483969 12 29.172 12 32 C 12 39.729 16.414656 46.434672 22.847656 49.763672 L 13.660156 24.042969 z M 32.369141 33.822266 L 26.5 51.212891 C 28.25 51.714891 30.091 52 32 52 C 34.264 52 36.431891 51.604203 38.462891 50.908203 L 32.369141 33.822266 z"></path>
          </svg>
        }
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Manual Testing"
        features={[
          "UI/UX testing across devices and browsers",
          "Test case creation and bug reporting",
          "Regression and exploratory testing",
        ]}
        desc="Human-driven testing to catch what automation misses."
        icon={<ShieldCheck />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Automation Testing"
        features={[
          "Selenium, Cypress, Playwright expertise",
          "End-to-end and integration test scripts",
          "Continuous testing via CI/CD pipelines",
        ]}
        desc="Automated test suites for efficient, repeatable QA."
        icon={<Bot />}
        color={spotlightBgColor}
      />
    </div>
  );
}
