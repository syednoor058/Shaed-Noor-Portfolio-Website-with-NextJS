import CountCardGrid from "@/components/Sections/CountCardGrid";
import MinimalHero from "@/components/ui/minimal-hero";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import Image from "next/image";
import shaedImg1 from "../../public/images/syed-shaeduzzaman-noor-hero-wide.webp";

export default function Home() {
  return (
    <>
      <main>

        {/* Hero section  */}
        <div className="w-full relative">
          <MinimalHero />
          <CountCardGrid />
          <div className="h-screen absolute z-[50] top-5 right-5 flex">
            <ThemeToggleButton />
          </div>
        </div>

        {/* About me section */}
        <div className="w-full flex flex-col gap-5 lg:items-end mt-10 relative">
          <div className="w-full h-full px-4 lg:px-20 relative lg:absolute z-[3] flex items-center mix-blend-difference">
            <h2 className="text-3xl md:text-4xl lg:text-[17vw] lg:font-thin text-neutral-200 tracking-tighter leading-tight lg:leading-0">About me</h2>
          </div>
          <div className="w-full lg:w-[50%] relative aspect-[6/4] overflow-hidden z-[1]">
          <Image src={shaedImg1} alt="syed noor image black n white" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10 mt-8 lg:mt-20 px-4 lg:px-20">
          <div className="lg:w-[40%]">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-neutral-800 font-semibold dark:text-white">Crafting impactful digital experiences that blend design, technology, and strategy</h3>
          </div>
          <div className="lg:w-[60%] flex flex-col gap-3">
            <p>I&apos;m a passionate full-stack developer and digital strategist who believes that great ideas deserve exceptional execution. With a background in building scalable web applications, eCommerce platforms, and marketing solutions, I help startups and businesses bring their visions to life — pixel by pixel, line by line.</p>
            <p>My work blends clean, modern aesthetics with performance-driven functionality. Whether it&apos;s designing an intuitive user interface, optimizing a campaign funnel, or automating a workflow, I focus on delivering results that matter.</p>
            <p>When I&apos;m not coding or creating, you&apos;ll find me exploring new tech trends, experimenting with animations, or refining UI/UX flows to the last detail.

</p>
          </div>
        </div>
      </main>
    </>
  );
}
