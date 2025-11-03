"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import shaedImg1 from "../../../public/images/syed-shaeduzzaman-noor-hero-wide.webp";

export default function AboutParallax() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax ranges
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "70%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <div ref={containerRef} className="w-full flex justify-end relative">
      {/* Parallax Text */}
      <motion.div
        style={{ y: textY }}
        className="w-full h-full px-4 lg:px-16 absolute z-[3] mix-blend-difference flex "
      >
        <h2 className="text-3xl md:text-4xl lg:text-[16.5vw] lg:font-extralight text-neutral-200 tracking-tighter leading-tight lg:leading-0">
          About me
        </h2>
      </motion.div>

      {/* Parallax Image */}
      <motion.div
        style={{ y: imageY }}
        className="w-[50%] relative aspect-[6/4] overflow-hidden z-[1]"
      >
        <Image
          src={shaedImg1}
          alt="syed noor image black n white"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
