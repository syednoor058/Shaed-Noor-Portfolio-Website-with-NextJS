"use client";

import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import cpcMarketing from "../../../public/images/portfolio/cpc-marketing.png";
import gymWeb from "../../../public/images/portfolio/gym-web.png";
import petShopEcommerce from "../../../public/images/portfolio/petshop-ecommerce.png";
import realEstate from "../../../public/images/portfolio/real-estate-software.png";
import { SecondaryButton } from "../Buttons/buttons";
import CardFlip from "../ui/card-flip";
import { useState } from "react";
import gymDemo from "../../../public/images/demo/gym-website-demo.png";
import petShopDemo from "../../../public/images/demo/petshop-website-demo.jpg";
import digitalAgencyDemo from "../../../public/images/demo/agency-business-website-demo.jpg";
import ProjectModal from "../Modals/ProjectModal";
import GlareHover from "../ui/glare-hover";
export const PortfolioBentoGrid = ({ className }) => {
  const [openProject, setOpenProject] = useState(null);
  const projects = {
    gym: {
      image: gymDemo.src,
      alt: "Gym center business website demo screenshot",
    },
    digitalAgency: {
      image: digitalAgencyDemo.src,
      alt: "Digital agency business website demo screenshot",
    },
    petShop: {
      image: petShopDemo.src,
      alt: "Petshop e-commerce web application demo screenshot",
    },
  };

  return (
    <>
      <div className={cn("w-full flex flex-col gap-3", className)}>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/3 flex">
            <div className="w-full flex flex-col rounded-[10px] border px-4 pt-4 md:px-5 md:pt-5 xl:px-7 xl:pt-7 bg-gradient-to-b from-zinc-900 to-black">
              <h3 className="text-white font-bold text-lg">
                Gymnasium Center Responsive Business Website
              </h3>
              <p className="text-sm mt-2 xl:mt-3">
                SEO-optimized website with modern design strategy grow online
                presence.
              </p>
              <div className="flex mt-3 xl:mt-5">
                <button
                  className="text-neutral-300 border-neutral-300 flex border  transition-colors duration-300 rounded-xs justify-center items-center overflow-hidden cursor-pointer"
                  onClick={() => setOpenProject(projects.gym)}
                >
                  <GlareHover
                    glareOpacity={0.4}
                    className={`relative px-[22px] py-[10px] gap-3 z-[5] flex flex-row justify-center items-center whitespace-nowrap`}
                  >
                    <span>
                      <BookOpen width={20} height={20} />
                    </span>
                    View Demo
                  </GlareHover>
                </button>
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden mt-3">
                <Image
                  src={gymWeb}
                  alt="Gym center business website"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col rounded-[10px] border p-4 md:p-5 xl:p-7 bg-gradient-to-b from-zinc-900 to-black">
              <h3 className="text-white font-bold text-lg">
                Digital Agency Full Responsive Business Website
              </h3>
              <p className="text-sm mt-1">
                Developed a full cross-browser responsive and super SEO friendly
                business website for a digital software agency.
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
                    View Screenshots
                  </GlareHover>
                </button>
              </div>
              <div className="w-full aspect-[8/5] overflow-hidden mt-auto">
                <Image
                  src={cpcMarketing}
                  alt="software agency business website"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <CardFlip />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col rounded-[10px] border p-4 md:p-5 xl:p-7 bg-gradient-to-b from-zinc-900 to-black">
            <h3 className="text-white font-bold text-lg">
              Comprehensive Real Estate Management System
            </h3>
            <p className="text-sm mt-1">
              A powerful management system for real estate professionals, to
              manage inventory, customer, employtee, and projects day to day.
            </p>
            <div className="flex mt-3 xl:mt-5">
              <SecondaryButton
                icon={<BookOpen width={20} height={20} />}
                text="View details"
                className="text-neutral-300 border-neutral-300"
              />
            </div>
            <div className="w-full aspect-video relative overflow-hidden mt-5">
              <Image
                src={realEstate}
                alt="Real estate management system dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col rounded-[10px] border p-4 md:p-5 xl:p-7 bg-gradient-to-b from-zinc-900 to-black">
            <h3 className="text-white font-bold text-lg">
              Petshop E-commerce Web Application
            </h3>
            <p className="text-sm mt-1">
              Full responsive online platform to maintain stores, manage orders,
              and track inventory seamlessly.
            </p>
            <div className="flex mt-3 xl:mt-5">
              <button
                className="text-neutral-300 border-neutral-300 flex border  transition-colors duration-300 rounded-xs justify-center items-center overflow-hidden cursor-pointer"
                onClick={() => setOpenProject(projects.petShop)}
              >
                <GlareHover
                  glareOpacity={0.4}
                  className={`relative px-[22px] py-[10px] gap-3 z-[5] flex flex-row justify-center items-center whitespace-nowrap`}
                >
                  <span>
                    <BookOpen width={20} height={20} />
                  </span>
                  View Demo
                </GlareHover>
              </button>
            </div>
            <div className="w-full aspect-video relative overflow-hidden mt-auto">
              <Image
                src={petShopEcommerce}
                alt="Petshop e-commerce web application"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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
