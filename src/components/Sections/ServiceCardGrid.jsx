"use client";

import {
  Bot,
  FolderCode,
  Globe,
  HandPlatter,
  LayoutPanelLeft,
  Rocket,
  ShieldCheck,
  ShoppingCart,
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

  const spotlightBgColor = resolvedTheme === "dark" ? "#262626" : "#262626";
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <ServiceCard
        title="Full-Stack Web Application Development"
        features={[
          "High-performance architectures (Next.js SSR/SSG/ISR)",
          "API development + seamless frontend–backend integration",
          "Secure authentication, authorization & production-grade deployments",
        ]}
        desc="Build modern, scalable and secure web applications using MERN / Next.js."
        icon={<FolderCode />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Custom Dashboard & Admin Panel Development"
        features={[
          "Role-based access + advanced CRUD operations",
          "Data visualization (charts, analytics, insights)",
          "JWT/Auth integration & audit logging features",
        ]}
        desc="Build powerful admin dashboards with secure data management."
        icon={<LayoutPanelLeft />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Landing Page Design & Development"
        features={[
          "Fully responsive & mobile-first landing page designs",
          "Conversion-focused UI with animations and interactivity",
          "Fast load & SEO-friendly structure for better search rankings",
        ]}
        desc="High-conversion landing pages for SaaS, startups, and agencies."
        icon={<Globe />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="E-Commerce Web Application Development"
        features={[
          "Product catalog, cart, checkout & order tracking",
          "Payment gateways (Stripe, SSLCommerz, PayPal) integration",
          "Inventory, coupons & customer dashboard management",
        ]}
        desc="End-to-end eCommerce systems with product, order & payment functionality."
        icon={<ShoppingCart />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="API Development & Integration"
        features={[
          "External API Integration (Payments, SMS, Maps, Analytics)",
          "Node.js/Express backend with clean architecture",
          "Secure endpoints with validation & rate limiting",
        ]}
        desc="Build and integrate fast, secure REST & GraphQL APIs for any product."
        icon={<HandPlatter />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Performance Optimization & Code Refactoring"
        features={[
          "Performance tuning (lazy loading, caching, bundle optimization)",
          "Clean, maintainable, and reusable refactored code",
          "Bug fixing and continous stability improvements",
        ]}
        desc="Improve speed, stability, lighthouse score & code quality of existing apps."
        icon={<Rocket />}
        color={spotlightBgColor}
      />
    </div>
  );
}
