import { cn } from "@/lib/utils";
import Link from "next/link";
import GlareHover from "../ui/glare-hover";

export function PrimaryButton({ text, url, icon, className, small = false }) {
  return (
    <Link
      href={url}
      className={cn(
        "flex text-[#fff] bg-gradient-to-tr from-violet-600  to-sky-600 transition-colors duration-300 rounded-xs justify-center items-center overflow-hidden",
        className
      )}
    >
      <GlareHover
        glareOpacity={0.4}
        className={`relative ${
          small ? "px-2 py-2 gap-2" : "px-6 py-3 gap-3"
        } z-[5] flex flex-row  justify-center items-center whitespace-nowrap`}
      >
        {text}
        <span>{icon}</span>
      </GlareHover>
    </Link>
  );
}

export function SecondaryButton({
  text,
  url = "#",
  icon,
  className,
  small = false,
}) {
  return (
    <Link
      href={url}
      className={cn(
        "flex text-white border border-white transition-colors duration-300 rounded-xs justify-center items-center overflow-hidden",
        className
      )}
    >
      <GlareHover
        glareOpacity={0.4}
        className={`relative ${
          small ? "px-[7px] py-[7px] gap-[7px]" : "px-[22px] py-[10px] gap-3"
        }  z-[5] flex flex-row justify-center items-center whitespace-nowrap`}
      >
        <span>{icon}</span>
        {text}
      </GlareHover>
    </Link>
  );
}
