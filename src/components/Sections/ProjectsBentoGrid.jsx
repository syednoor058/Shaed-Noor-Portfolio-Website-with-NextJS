"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import agencyWebMockup from "../../../public/images/projects/agency-website-mockup.jpg";
import petShopMockup from "../../../public/images/projects/petshop-mockup.webp";
import propsuitScreenShot from "../../../public/images/projects/propsuit-mmockup.webp";
import sportswearMockup from "../../../public/images/projects/sportswear-ecommerce-mockup.webp";
import automationTesting from "../../../public/images/projects/wordpress-automation-testing.webp";
import { ProjectCard } from "../Cards/cards";

export default function ProjectsBentoGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until client-side hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  const spotlightBgColor = resolvedTheme === "dark" ? "#262626" : "#fff";
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ProjectCard
          img={propsuitScreenShot}
          alt="Propsuit real estate management system screenshot"
          title="Comprehensive Real Estate Management System"
          desc="A full-stack web platform to streamline real estate operations, enabling agents and admins to manage listings, leads, and clients efficiently. Built with modern architecture to ensure scalability and performance."
          demo="https://sikder-foundation.vercel.app/"
          github="https://github.com/syednoor058/Customer-Relationship-Management-System-Frontend"
          color={spotlightBgColor}
        />
        <ProjectCard
          img={agencyWebMockup}
          alt="agency website mockup screenshot"
          title="Responsive Software Agency Business Website"
          desc="A fully responsive and blazing-fast website built with Next.js and Tailwind CSS for a software agency. Features include service breakdowns, portfolio showcase, and a smooth dark/light theme toggle."
          demo="https://www.devionark.com/"
          github="https://github.com/syednoor058/Devion-Ark-Website-with-NextJS"
          color={spotlightBgColor}
        />
        <ProjectCard
          img={petShopMockup}
          alt="petshop ecommerce screenshot"
          title="Dynamic Pet Shop E-commerce Web Application"
          desc="A personalized shopping experience for pet lovers. Integrated product recommendations, multi-category filtering, cart functionality, and localStorage-based checkout. Built for seamless UX and fast performance."
          demo="https://www.treatosbd.com"
          github="https://github.com/syednoor058/TreatosBD-Full-Responsive-eCommerce-Website"
          color={spotlightBgColor}
        />
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <ProjectCard
            img={sportswearMockup}
            alt="Sportswear ecommerce screenshot"
            title="Full Sportswear E-commerce Web Application"
            desc="An end-to-end eCommerce experience for a sportswear brand — featuring product filtering, shopping cart, checkout, payment gateway integration, and admin management tools. Designed for responsiveness and high conversion."
            demo="https://www.kick-offjersey.com/"
            github="https://github.com/syednoor058/Sportswear-E-Commerce-Web-Application"
            color={spotlightBgColor}
          />
        </div>
        <ProjectCard
          img={automationTesting}
          alt="WordPress Plugins Automation with Playwright"
          title="WordPress Plugins Automation with Playwright"
          desc="Designed a test automation suite using Playwright to improve plugin quality and speed up QA by 35%."
          demo=""
          github="https://github.com/syednoor058/WordPress-plugin-automation-test-by-Playwright"
          color={spotlightBgColor}
          addOns={[
            "Set up Playwright with Node.js and configured browser environments.",
            "Automated admin/user login and plugin installation workflows.",
            "Wrote end-to-end test scripts for forms, data handling, and UI behaviors.",
          ]}
        />
      </div>
    </div>
  );
}
