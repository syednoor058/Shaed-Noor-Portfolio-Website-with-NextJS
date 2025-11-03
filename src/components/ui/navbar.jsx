"use client";

import {
  BriefcaseBusiness,
  ConciergeBell,
  HouseIcon,
  Phone,
  SquareUserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import syedNoorImg from "../../../public/images/syed-noor-footer-image.jpg";
import GlareHover from "./glare-hover";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Home", icon: HouseIcon },
  { href: "/#about", label: "About", icon: SquareUserRound },
  { href: "/#services", label: "Services", icon: ConciergeBell },
  { href: "/#projects", label: "Projects", icon: BriefcaseBusiness },
];

export default function Navbar() {
  return (
    <header className="w-full sticky left-0 top-0 z-[1000] bg-transparent">
      <div className="w-full px-4 md:px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-48 p-1 md:hidden rounded-xs"
              >
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <NavigationMenuItem key={index} className="w-full">
                          <NavigationMenuLink
                            href={link.href}
                            className="flex-row items-center gap-2 py-1.5"
                          >
                            <Icon
                              size={16}
                              className="text-muted-foreground"
                              aria-hidden="true"
                            />
                            <span>{link.label}</span>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      );
                    })}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            <div className="text-base font-semibold  text-white uppercase font-mono flex flex-row gap-3 items-center">
              <div className="w-8 aspect-square  relative">
                <Image
                  src={syedNoorImg}
                  alt="syed noor profile photo"
                  className="w-full h-full object-cover rounded-full relative z-[2]"
                />
                <div className="absolute -right-0.5 top-0.5 w-[10px] h-[10px] z-[5] rounded-full bg-lime-500 border border-neutral-50"></div>
              </div>
              Syed Noor
            </div>
          </div>
          {/* Middle area */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      className="flex size-8 items-center justify-center p-1 text-neutral-300 hover:text-neutral-100"
                      title={link.label}
                    >
                      <Icon aria-hidden="true" />
                      <span className="sr-only">{link.label}</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Right side */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="flex">
              <Link
                href="#contact"
                className="border  border-neutral-300 rounded-xs"
              >
                <GlareHover
                  glareOpacity={0.4}
                  className={`relative px-[14px] py-[8px] z-[5] flex flex-row gap-2 justify-center items-center whitespace-nowrap  text-neutral-300 text-sm`}
                >
                  <span>
                    <Phone width={16} height={16} />
                  </span>
                  Contact
                </GlareHover>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
