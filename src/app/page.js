import AboutParallax from "@/components/Parallax/AboutParallax";
import CountCardGrid from "@/components/Sections/CountCardGrid";
import { ProjectsBentoGrid } from "@/components/Sections/ProjectsBentoGrid";
import ServiceCardGrid from "@/components/Sections/ServiceCardGrid";
import MinimalHero from "@/components/ui/minimal-hero";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { BriefcaseBusiness, ConciergeBell } from "lucide-react";
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

export default function Home() {
  return (
    <>
      <main className="-mt-16">
        {/* Hero section  */}
        <div className="w-full relative">
          <MinimalHero />
          <CountCardGrid />
        </div>

        <div className="hidden lg:inline-block w-full mt-10">
          <AboutParallax />
        </div>

        {/* About me section */}
        <div
          id="about"
          className=" w-full flex lg:hidden flex-col gap-5 mt-10 relative scroll-mt-10"
        >
          <div className="w-full h-full px-4 lg:px-20 relative z-[3] flex items-center mix-blend-difference">
            <h2 className="text-3xl md:text-4xl text-neutral-200 tracking-tighter leading-tight font-semibold">
              About me
            </h2>
          </div>
          <div className="w-full relative aspect-[6/4] overflow-hidden z-[1]">
            <Image
              src={shaedImg1}
              alt="syed noor image black n white"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10 mt-8 lg:mt-20 px-4 lg:px-20 mb-5 lg:mb-20">
          <div className="lg:w-[40%]">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-neutral-800 font-semibold dark:text-white">
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
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={nextjsLogo}
                  alt="Next JS Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={reactLogo}
                  alt="react JS Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={wordpressLogo}
                  alt="wordpress Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={expressLogo}
                  alt="express JS Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={fastAPILogo}
                  alt="fast api Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={nodeLogo}
                  alt="node JS Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={mongodbLogo}
                  alt="mongodb Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={postgreLogo}
                  alt="postgreSQL Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={seleniumLogo}
                  alt="selenium Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={playwrightLogo}
                  alt="playright Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={tailwindLogo}
                  alt="tailwind css Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={framermotionLogo}
                  alt="framer motion Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={shadcnLogo}
                  alt="shad cn Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
            </MarqueeContent>
          </Marquee>
          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />
            <MarqueeContent direction="right">
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={nextjsLogo}
                  alt="Next JS Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={reactLogo}
                  alt="react JS Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={wordpressLogo}
                  alt="wordpress Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={expressLogo}
                  alt="express JS Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={fastAPILogo}
                  alt="fast api Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={nodeLogo}
                  alt="node JS Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={mongodbLogo}
                  alt="mongodb Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={postgreLogo}
                  alt="postgreSQL Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={seleniumLogo}
                  alt="selenium Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={playwrightLogo}
                  alt="playright Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={tailwindLogo}
                  alt="tailwind css Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={framermotionLogo}
                  alt="framer motion Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
              <MarqueeItem className="h-6 lg:h-10 overflow-hidden">
                <Image
                  src={shadcnLogo}
                  alt="shad cn Logo"
                  className="w-full h-full object-cover invert-0 dark:invert"
                />
              </MarqueeItem>
            </MarqueeContent>
          </Marquee>
        </div>

        {/* Services section */}

        <div className="w-full px-4 lg:px-20 py-10 lg:py-20 flex flex-col items-center gap-10 lg:gap-20">
          <div className="w-full lg:max-w-5xl flex flex-col gap-5 lg:gap-7 lg:items-center">
            <div className="md:text-center flex">
              <h2 className="text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase flex flex-row gap-4 items-center border border-neutral-500 p-2 rounded-xs">
                <span className="p-2 rounded-xs bg-gradient-to-tr from-violet-600 to-sky-600 text-[#fff]">
                  <ConciergeBell width={18} height={18} />
                </span>
                Services I Offer
              </h2>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal tracking-tight md:text-center text-neutral-800 dark:text-white ">
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
        <div className="w-full px-4 lg:px-20 py-10 lg:py-20 flex flex-col items-center gap-10 lg:gap-20">
          <div className="w-full lg:max-w-5xl flex flex-col gap-5 lg:gap-7 lg:items-center">
            <div className="md:text-center flex">
              <h2 className="text-xs md:text-sm lg:text-base tracking-[0.2em] uppercase flex flex-row gap-4 items-center border border-neutral-500 p-2 rounded-xs">
                <span className="p-2 rounded-xs bg-gradient-to-tr from-violet-600 to-sky-600 text-[#fff]">
                  <BriefcaseBusiness width={18} height={18} />
                </span>
                Projects I&apos;ve Worked On
              </h2>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal tracking-tight md:text-center text-neutral-800 dark:text-white ">
            Work That Speaks Louder Than Words
            </h2>
            <p className="lg:text-xl md:text-center">
            Here are some of the most meaningful projects I’ve built — real-world solutions tailored for scale, usability, and impact. Each project showcases my technical depth, design thinking, and commitment to quality across the software development lifecycle.
            </p>
          </div>
          <ProjectsBentoGrid />
        </div>
      </main>
    </>
  );
}
