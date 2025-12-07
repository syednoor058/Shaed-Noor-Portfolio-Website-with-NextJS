"use client";

import { cn } from "@/lib/utils";
import devionArkSite from "../../../public/images/portfolio/devion-ark-website.webp";
import gymWeb from "../../../public/images/portfolio/gym-web.webp";
import petShopEcommerce from "../../../public/images/portfolio/petshop-ecommerce.webp";
import realEstate from "../../../public/images/portfolio/real-estate-software.webp";
import { useState } from "react";
import petShopDemo from "../../../public/images/demo/petshop-website-demo.webp";
import lumivanceScrnshot from "../../../public/images/portfolio/lumivance_emrce_scrnshot.webp";
import carRentalAppScrnshot from "../../../public/images/portfolio/car_rental_scrnsht.webp";
import ProjectModal from "../Modals/ProjectModal";
import FlipCard from "../Cards/FlipCard";
export const PortfolioBentoGrid = ({ className }) => {
  const [openProject, setOpenProject] = useState(null);
  const projects = {
    gym: {
      title: "Pulse Fitness - Responsive Business Website",
      url: "https://pulse-fitness-gym.vercel.app/",
      title: "Pulse Fitness - Gym center business website demo screenshot",
    },
    digitalAgency: {
      url: "https://devion-ark-website.vercel.app/",
      title: "Devion Ark - Full Responsive Digital Agency Website",
    },
    petShop: {
      title: "TreatosBD - Ecommerce Web Application",
      image: petShopDemo.src,
      alt: "Petshop e-commerce web application demo screenshot",
    },
    lumivanceEcommerce: {
      title: "Lumivance - Full Stack Ecommerce Application",
      url: "https://lumivance-ecommerce.vercel.app/",
    },
    realEstateManagement: {
      title: "PropSuite - Real Estate Management System",
      url: "https://sikder-foundation.vercel.app/",
    },
    carRentalApp: {
      title: "OmniQ - Online Car Rental Management System",
      url: "https://omniq-rent.vercel.app/",
    },
  };

  return (
    <>
      <div className={cn("w-full flex flex-col gap-3", className)}>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/3 flex">
            <FlipCard
              title="Full Stack Ecommerce Application with Next JS"
              description="Lumivance is an open-source Next.js eCommerce frontend project. It provides a modern, fast and customizable shopping UI."
              features={[
                "Server-side-rendering with Next JS",
                "Modern UI experience with Tailwind CSS",
                "Full stack integeration",
                "User authentication is managed by Clerk",
                "Secured database hosted on MongoDB",
                "Full responsive interface",
              ]}
              onClickFunc={() => setOpenProject(projects.lumivanceEcommerce)}
              imageSrc={lumivanceScrnshot}
              alt="lumivance ecommerce screenshot"
              aspectRatio="aspect-[800/600]"
            />
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <FlipCard
              title="Full Responsive Digital Agency Business Website"
              description="Developed a full cross-browser responsive and super SEO friendly business website for a digital software agency."
              features={[
                "Professional agency-grade modern UI",
                "Fully responsive across all screen sizes",
                "Services, portfolio & testimonial showcases",
                "Contact and inquiry form integration",
                "SEO-optimized and performance tuned",
                "Brand-focused design with smooth animations",
              ]}
              onClickFunc={() => setOpenProject(projects.digitalAgency)}
              imageSrc={devionArkSite}
              alt="software agency business website"
              aspectRatio="aspect-[800/600]"
            />
            <FlipCard
              title="SEO-friendly Gymnasium Center Responsive Website"
              description="Modern design strategy, and server-side-rendering with Next.JS, helps to grow online presence faster."
              features={[
                "Modern and energetic UI for fitness brands",
                "Fully responsive layout optimized for all devices",
                "Class schedules, trainer profiles & pricing sections",
                "Smooth animations and interactive elements",
                "SEO-friendly structure for better visibility",
                "Fast performance with optimized images",
              ]}
              onClickFunc={() => setOpenProject(projects.gym)}
              imageSrc={gymWeb}
              alt="Gym center business website"
              aspectRatio="aspect-[800/600]"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          <FlipCard
            title="Comprehensive Real Estate Management System"
            description="A powerful management system for real estate professionals, to manage inventory, customer, employtee, and projects day to day."
            features={[
              "Full CRUD property management dashboard",
              "Role-based authentication for admin & agents",
              "Secure database operations with MongoDB",
              "Property listing with images, filters, search",
              "Tenant, lease & payment management",
              "Analytics dashboard for insights & reporting",
            ]}
            onClickFunc={() => setOpenProject(projects.realEstateManagement)}
            imageSrc={realEstate}
            alt="Real estate management system dashboard"
          />
          <FlipCard
            title="Single Vendor Web Application with MERN Stack"
            description="Full responsive online platform to maintain stores, manage orders, and track inventory seamlessly."
            features={[
              "App-router based full stack implementation",
              "Server actions & SSR for fast page loads",
              "Cart, checkout & order management",
              "Secure authentication and user accounts",
              "Product filters, search & dynamic routing",
              "Responsive UI powered by Tailwind CSS",
            ]}
            onClickFunc={() => setOpenProject(projects.petShop)}
            imageSrc={petShopEcommerce}
            alt="Petshop e-commerce web application"
            btnName="View Demo"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/3 flex">
            <FlipCard
              title="Car Rental & Booking Web Application"
              description="A user-friendly car rental platform where customers can browse vehicles, compare pricing, check availability, and book rentals instantly."
              features={[
                "User authentication with JWT & secure APIs",
                "Car browsing, filtering & detailed pages",
                "Real-time rental bookings and availability",
                "Admin dashboard for cars, rentals & revenue",
                "MongoDB database for stable data management",
                "Smooth and fully responsive UI",
              ]}
              onClickFunc={() => setOpenProject(projects.carRentalApp)}
              imageSrc={carRentalAppScrnshot}
              alt="car rental management system screenshot"
              aspectRatio="aspect-[800/600]"
            />
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-3"></div>
        </div>
      </div>

      {/* MODAL */}
      <ProjectModal
        isOpen={!!openProject}
        onClose={() => setOpenProject(null)}
        projectDemo={openProject}
      />
    </>
  );
};
