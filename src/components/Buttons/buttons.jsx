import Link from "next/link";
import GlareHover from "../ui/glare-hover";

export function PrimaryButton({ text, url, icon }) {
  return (
    <Link
      href={url}
      className="flex text-[#fff] bg-gradient-to-tr from-violet-600 hover:from-neutral-800 to-sky-600 hover:to-neutral-800 dark:hover:from-white dark:hover:to-white hover:text-white dark:hover:text-neutral-800 transition-colors duration-300 rounded-xs justify-center items-center"
    >
      <GlareHover
        glareOpacity={0.4}
        className={`relative px-6 py-3 z-[5] flex flex-row gap-3 justify-center items-center whitespace-nowrap`}
      >
        {text}
        <span>{icon}</span>
      </GlareHover>
    </Link>
  );
}

export function SecondaryButton({ text, url, icon }) {
  return (
    <Link
      href={url}
      className="flex text-neutral-800 dark:text-white border border-neutral-800 dark:border-white transition-colors duration-300 rounded-xs justify-center items-center"
    >
      <GlareHover
        glareOpacity={0.4}
        className={`relative px-[22px] py-[10px] z-[5] flex flex-row gap-3 justify-center items-center whitespace-nowrap`}
      >
        <span>{icon}</span>
        {text}
      </GlareHover>
    </Link>
  );
}
