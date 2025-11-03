import { Github, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import syedNoorFooter from "../../../public/images/syed-noor-footer-image.jpg"; // Update with the correct path to your image
import ContactForm from "../ContactForm";
import GlareHover from "../ui/glare-hover";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 px-4 md:px-10 lg:px-16 py-10 lg:py-20 bg-[#050505]">
        <div className="lg:w-[50%] flex flex-col gap-10 lg:items-stretch lg:justify-between">
          <div className="flex flex-col gap-2">
            <div className="w-20 aspect-square  relative">
              <Image
                src={syedNoorFooter}
                alt="syed noor profile photo"
                className="w-full h-full object-cover rounded-full relative z-[2]"
              />
              <div className="absolute -right-0.5 top-2.5 w-[16px] h-[16px] z-[5] rounded-full bg-lime-500 border border-neutral-50"></div>
            </div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold  text-white leading-tight mt-2">
              Syed Shaeduzzaman Noor
            </h4>
            <p>
              Whether you have an idea, a project, or just want to say hello —
              I&apos;m always open to new collaborations and creative
              conversations.
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <div className="w-full flex flex-row gap-1">
                <div className="w-[20%]">Address:</div>
                <div className="w-[80%]">
                  8 Tootpara Central Rd, Khulna-9100, Bangladesh
                </div>
              </div>
              <div className="w-full flex flex-row gap-1">
                <div className="w-[20%]">Email:</div>
                <div className="w-[80%]">syednoor058@gmail.com</div>
              </div>
              <div className="w-full flex flex-row gap-1">
                <div className="w-[20%]">Phone:</div>
                <div className="w-[80%]">+8801782734573</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="https://www.facebook.com/shaed.noor/"
                className=" inline-block border  border-neutral-600 rounded-full overflow-hidden"
              >
                <GlareHover className="p-2">
                  <Facebook />
                </GlareHover>
              </Link>
              <Link
                href="https://www.instagram.com/shaed_noor/"
                className="inline-block overflow-hidden border  border-neutral-600 rounded-full"
              >
                <GlareHover className="p-2">
                  <Instagram />
                </GlareHover>
              </Link>
              <Link
                href="https://www.linkedin.com/in/shaednoor/"
                className="inline-block overflow-hidden border  border-neutral-600 rounded-full"
              >
                <GlareHover className="p-2">
                  <Linkedin />
                </GlareHover>
              </Link>
              <Link
                href="https://github.com/syednoor058"
                className="inline-block overflow-hidden border  border-neutral-600 rounded-full"
              >
                <GlareHover className="p-2">
                  <Github />
                </GlareHover>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-row gap-6">
            <div className="w-[30%] font-bold  text-neutral-100">
              Quick Links:
            </div>
            <div className="w-[70%] flex flex-wrap gap-3">
              <Link
                href="/"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Home
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="#about"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                About
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="#services"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Services
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="#projects"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Projects
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Testimonials
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <ContactForm />
        </div>
      </div>
      <div className="py-5 w-full flex flex-col lg:flex-row gap-2 justify-center items-center  bg-black">
        <div className="inline-block leading-none">
          &copy; 2025 Syed Shaeduzzaman Noor.
        </div>
        <div className="inline-block leading-none">All rights reserved.</div>
      </div>
    </>
  );
}
