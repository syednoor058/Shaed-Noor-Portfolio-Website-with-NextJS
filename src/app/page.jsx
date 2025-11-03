import AboutParallax from "@/components/Parallax/AboutParallax";
import CountCardGrid from "@/components/Sections/CountCardGrid";
import { PortfolioBentoGrid } from "@/components/Sections/ProjectsBentoGrid";
import ServiceCardGrid from "@/components/Sections/ServiceCardGrid";
import MinimalHero from "@/components/ui/minimal-hero";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { BriefcaseBusiness, ConciergeBell, Star } from "lucide-react";
import Image from "next/image";
import expressLogo from "../../public/images/expertise/express.png";
import fastAPILogo from "../../public/images/expertise/fastapi.png";
import framermotionLogo from "../../public/images/expertise/framer-motion.png";
import mongodbLogo from "../../public/images/expertise/mongodb.png";
import nextjsLogo from "../../public/images/expertise/next-js.png";
import nodeLogo from "../../public/images/expertise/node.png";
import playwrightLogo from "../../public/images/expertise/playwright.png";
import postgreLogo from "../../public/images/expertise/postgresql.png";
import reactLogo from "../../public/images/expertise/react.png";
import seleniumLogo from "../../public/images/expertise/selenium.png";
import shadcnLogo from "../../public/images/expertise/shadcn.png";
import tailwindLogo from "../../public/images/expertise/tailwind-css.png";
import wordpressLogo from "../../public/images/expertise/wordpress.png";
import shaedImg1 from "../../public/images/syed-shaeduzzaman-noor-hero-wide.webp";

import TestimonialGrid from "@/components/Sections/TestimonialGrid";
import { AnimatedTooltip } from "@/components/ui/avatar-group";
import azizulImg from "../../public/images/testimonials/azizul.webp";
import farhanImg from "../../public/images/testimonials/farhan_masum.webp";
import mehediImg from "../../public/images/testimonials/mehedi.webp";
import RakibImage from "../../public/images/testimonials/rakib.webp";
import rituImg from "../../public/images/testimonials/rhitu.webp";
import tanhaImg from "../../public/images/testimonials/tanha.webp";

import brocelle from "../../public/images/partners/borcelle.png";
import brigite from "../../public/images/partners/brigite.png";
import elevate from "../../public/images/partners/elevate.png";
import indigo from "../../public/images/partners/indigo_company.png";
import interaid from "../../public/images/partners/interaid.png";
import puppetbrush from "../../public/images/partners/puppetbrush.png";
import qahaf from "../../public/images/partners/qahaf.png";
import retrofino from "../../public/images/partners/retrofino.png";
import sikderfoundation from "../../public/images/partners/sikder_foundation.png";
import treatosbd from "../../public/images/partners/treatosBD.png";

export default function Home() {
  const people = [
    {
      id: 1,
      name: "Azizul Haque",
      designation: "CEO, InterAiD",
      image: azizulImg,
    },
    {
      id: 2,
      name: "Farhan Masum",
      designation: "SEO Specialist",
      image: farhanImg,
    },
    {
      id: 3,
      name: "Rakib Shikdar",
      designation: "Owner, Retrofino",
      image: RakibImage,
    },
    {
      id: 4,
      name: "Tanjina Tanha",
      designation: "Owner, Tanha's Kitchen",
      image: tanhaImg,
    },
    {
      id: 5,
      name: "Mustafa Mehedi",
      designation: "Owner, Qahaf",
      image: mehediImg,
    },
    {
      id: 6,
      name: "Rhituparna Das",
      designation: "Doctor",
      image: rituImg,
    },
  ];
  return (
    <>
      <main className="-mt-16">
        {/* Hero section  */}
        <div className="w-full relative">
          <MinimalHero />
          <CountCardGrid />
        </div>

        <div id="about" className="hidden lg:inline-block w-full mt-10">
          <AboutParallax />
        </div>

        {/* About me section */}
        <div
          id="about"
          className=" w-full flex lg:hidden flex-col gap-5 mt-10 relative scroll-mt-10"
        >
          <div className="w-full h-full px-4 lg:px-20 relative z-3 flex items-center mix-blend-difference">
            <h2 className="text-3xl md:text-4xl text-neutral-200 tracking-tighter leading-tight font-semibold">
              About me
            </h2>
          </div>
          <div className="w-full relative aspect-6/4 overflow-hidden z-1">
            <Image
              src={shaedImg1}
              alt="syed noor image black n white"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10 mt-8 lg:mt-20 px-4 lg:px-20 mb-5 lg:mb-20">
          <div className="lg:w-[40%]">
            <h3 className="text-xl md:text-2xl lg:text-3xl  font-semibold text-white">
              Crafting impactful digital experiences that blend design,
              technology, and strategy
            </h3>
          </div>
          <div className="lg:w-[60%] flex flex-col gap-3">
            <p>
              I&apos;m a passionate full-stack developer and digital strategist
              who believes that great ideas deserve exceptional execution. With
              a background in building scalable web applications, eCommerce
              platforms, and marketing solutions, I help startups and businesses
              bring their visions to life — pixel by pixel, line by line.
            </p>
            <p>
              My work blends clean, modern aesthetics with performance-driven
              functionality. Whether it&apos;s designing an intuitive user
              interface, optimizing a campaign funnel, or automating a workflow,
              I focus on delivering results that matter.
            </p>
            <p>
              When I&apos;m not coding or creating, you&apos;ll find me
              exploring new tech trends, experimenting with animations, or
              refining UI/UX flows to the last detail.
            </p>
          </div>
        </div>

        {/* Expertise section */}
        <div className="w-full py-10 lg:py-20 flex flex-col gap-6 lg:gap-10">
          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={nextjsLogo}
                  alt="Next JS Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={reactLogo}
                  alt="react JS Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={wordpressLogo}
                  alt="wordpress Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={expressLogo}
                  alt="express JS Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={fastAPILogo}
                  alt="fast api Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={nodeLogo}
                  alt="node JS Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={mongodbLogo}
                  alt="mongodb Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={postgreLogo}
                  alt="postgreSQL Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={seleniumLogo}
                  alt="selenium Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={playwrightLogo}
                  alt="playright Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={tailwindLogo}
                  alt="tailwind css Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={framermotionLogo}
                  alt="framer motion Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={shadcnLogo}
                  alt="shad cn Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
            </MarqueeContent>
          </Marquee>
          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent direction="right">
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={nextjsLogo}
                  alt="Next JS Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={reactLogo}
                  alt="react JS Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={wordpressLogo}
                  alt="wordpress Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={expressLogo}
                  alt="express JS Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={fastAPILogo}
                  alt="fast api Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={nodeLogo}
                  alt="node JS Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={mongodbLogo}
                  alt="mongodb Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={postgreLogo}
                  alt="postgreSQL Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={seleniumLogo}
                  alt="selenium Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={playwrightLogo}
                  alt="playright Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={tailwindLogo}
                  alt="tailwind css Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={framermotionLogo}
                  alt="framer motion Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={shadcnLogo}
                  alt="shad cn Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
            </MarqueeContent>
          </Marquee>
        </div>

        {/* Services section */}

        <div
          id="services"
          className="w-full px-4 lg:px-20 py-10 lg:py-20 flex flex-col items-center gap-10 lg:gap-20"
        >
          <div className="max-w-4xl flex flex-col gap-5 lg:gap-7 lg:items-center">
            <div className="md:text-center flex">
              <h2 className="text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase flex flex-row gap-4 items-center border border-neutral-500 p-2 rounded-xs">
                <span className="p-2 rounded-xs bg-linear-to-tr from-violet-600 to-sky-600 text-white">
                  <ConciergeBell width={18} height={18} />
                </span>
                Offered Services
              </h2>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal tracking-tight md:text-center  text-white ">
              Bringing Ideas to Life with Code & Creativity
            </h2>
            <p className="lg:text-xl md:text-center">
              I specialize in crafting modern, scalable, and user-focused
              digital solutions. From robust software systems to polished web
              experiences, I combine deep technical expertise with a strong
              sense of design and usability to deliver results that work — and
              last.
            </p>
          </div>
          <ServiceCardGrid />
        </div>

        {/* Projects section  */}
        <div
          id="projects"
          className="w-full px-4 lg:px-20 py-10 lg:py-20 flex flex-col items-center gap-10 lg:gap-20"
        >
          <div className="max-w-4xl flex flex-col gap-5 lg:gap-7 lg:items-center">
            <div className="md:text-center flex">
              <h2 className="text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase flex flex-row gap-4 items-center border border-neutral-500 p-2 rounded-xs">
                <span className="p-2 rounded-xs bg-linear-to-tr from-violet-600 to-sky-600 text-white">
                  <BriefcaseBusiness width={18} height={18} />
                </span>
                Projects Showcase
              </h2>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal tracking-tight md:text-center  text-white ">
              Work That Speaks Louder Than Words
            </h2>
            <p className="lg:text-xl md:text-center">
              Here are some of the most meaningful projects I’ve built —
              real-world solutions tailored for scale, usability, and impact.
              Each project showcases my technical depth, design thinking, and
              commitment to quality across the software development lifecycle.
            </p>
          </div>
          <PortfolioBentoGrid />
        </div>

        {/* Partners section */}
        <div className="w-full py-10 lg:py-20 flex flex-col gap-6 lg:gap-10">
          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={interaid}
                  alt="InterAid Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={puppetbrush}
                  alt="puppetbrush Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={brocelle}
                  alt="brocelle Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={retrofino}
                  alt="retrofino Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={qahaf}
                  alt="qahaf Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={indigo}
                  alt="indigo Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={brigite}
                  alt="brigite Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={treatosbd}
                  alt="Treatos BD Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={elevate}
                  alt="Elevate Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={sikderfoundation}
                  alt="sikder foundation Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
            </MarqueeContent>
          </Marquee>
          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent direction="right">
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={interaid}
                  alt="InterAid Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={puppetbrush}
                  alt="puppetbrush Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={brocelle}
                  alt="brocelle Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={retrofino}
                  alt="retrofino Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={qahaf}
                  alt="qahaf Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={indigo}
                  alt="indigo Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={brigite}
                  alt="brigite Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={treatosbd}
                  alt="Treatos BD Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={elevate}
                  alt="Elevate Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-12 overflow-hidden">
                <Image
                  src={sikderfoundation}
                  alt="sikder foundation Logo"
                  className="w-full h-full object-cover  invert"
                />
              </MarqueeItem>
            </MarqueeContent>
          </Marquee>
        </div>

        {/* Testimonial section  */}
        <div
          id="testimonials"
          className="w-full px-4 lg:px-20 py-10 lg:py-20 flex flex-col items-center gap-10 lg:gap-20"
        >
          <div className="w-full lg:max-w-5xl flex flex-col gap-5 lg:gap-7 items-center">
            <div className="w-full flex flex-row gap-3 items-center justify-center">
              <p>Excellent</p>
              <div className="flex flex-row gap-1">
                <div className="p-1 bg-green-500 text-white">
                  <Star width={18} height={18} />
                </div>
                <div className="p-1 bg-green-500 text-white">
                  <Star width={18} height={18} />
                </div>
                <div className="p-1 bg-green-500 text-white">
                  <Star width={18} height={18} />
                </div>
                <div className="p-1 bg-green-500 text-white">
                  <Star width={18} height={18} />
                </div>
                <div className="p-1 bg-green-500 text-white">
                  <Star width={18} height={18} />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center w-full">
              <AnimatedTooltip items={people} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal tracking-tight text-center  text-white ">
              Trusted by 12+ Companies & Development Teams All Over the World
            </h2>
            <p className="lg:text-xl text-center">
              Don&apos;t just take my word for it — hear from the people and
              businesses I&apos;ve collaborated with. From startups to
              established brands, here&apos;s what they have to say about
              working together.
            </p>
          </div>
          <TestimonialGrid />
        </div>
      </main>
    </>
  );
}
