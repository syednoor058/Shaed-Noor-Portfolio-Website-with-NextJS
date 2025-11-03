"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircleHeart,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import azizulImg from "../../../public/images/testimonials/azizul.webp";
import farhanImg from "../../../public/images/testimonials/farhan_masum.webp";
import mehediImg from "../../../public/images/testimonials/mehedi.webp";
import RakibImage from "../../../public/images/testimonials/rakib.webp";
import rituImg from "../../../public/images/testimonials/rhitu.webp";
import tanhaImg from "../../../public/images/testimonials/tanha.webp";
import { TestimonialCard } from "../Cards/cards";

export default function TestimonialGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until client-side hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const spotlightBgColor = resolvedTheme === "dark" ? "#262626" : "#262626";
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <TestimonialCard
        color={spotlightBgColor}
        name="Md Azizul Haque"
        designation="CEO, InterAiD"
        feedback="Working with Shaed Noor has been a game-changer for us at InterAiD. From managing our Facebook page and running effective ads campaigns to keeping our website updated and professional — he has handled it all with care and consistency."
        img={azizulImg}
        alt="azizul haque image"
        icon={<Facebook width={16} height={16} />}
        iconBg="bg-blue-500 text-white"
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Kazi Farhan Masum"
        designation="SEO Specialist, Puppetbrush"
        feedback="Our business grew faster than we imagined after partnering with Syed Noor. He showed obedient behavior and a work friendly attitude. He was always willing to offer his assistance. I wish him every success in his future endeavors."
        img={farhanImg}
        alt="farhan masum image"
        icon={<Linkedin width={16} height={16} />}
        iconBg="bg-cyan-700 text-white"
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Tanjina Tanha"
        designation="Owner, Tanha's Kitchen"
        feedback="Absolutely loved working with Syed Shaeduzzaman Noor! He completely transformed our social media game at Sweet Cakes. Our engagement has gone way up, and we've even had customers mention he found us through our Instagram!"
        img={tanhaImg}
        alt="tanjina tanha image"
        icon={<MessageCircleHeart width={16} height={16} />}
        iconBg="bg-pink-400 text-white"
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Syed Mustafa Mehedi"
        designation="Owner, Qahaf"
        feedback="We're super happy with Syed Noor! His ad campaigns and social media management really boosted our clothing brand, Qahaf. He brought in great engagement and sales with a professional yet approachable style. Highly recommended!"
        img={mehediImg}
        alt="mustafa mehedi image"
        icon={<Instagram width={16} height={16} />}
        iconBg="bg-gradient-to-tr from-blue-500 to-pink-500 text-white"
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Rhituparna Das"
        designation="Doctor"
        feedback="We are incredibly pleased with Syed! He developed a fantastic real estate management system for us that is streamlined our operations. His team was professional, responsive, and delivered exactly what we needed. Highly recommend his services!"
        img={rituImg}
        alt="ritu das image"
        icon={<Facebook width={16} height={16} />}
        iconBg="bg-blue-500 text-white"
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Rakib Shikder"
        designation="Owner, Retrofino"
        feedback="I am thrilled with the results from our recent ad campaign run by Shaed Noor! With just a small budget, he helped us reach almost twenty thousands of local people and generated two hundreds of real customer messages."
        img={RakibImage}
        alt="rakib shikdar image"
        icon={<Instagram width={16} height={16} />}
        iconBg="bg-gradient-to-tr from-blue-500 to-pink-500 text-white"
      />
    </div>
  );
}
