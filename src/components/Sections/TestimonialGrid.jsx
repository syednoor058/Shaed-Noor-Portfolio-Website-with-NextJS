"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircleHeart,
  Twitter,
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
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TestimonialCard
        color={spotlightBgColor}
        name="Md Azizul Haque"
        designation="CEO, InterAiD"
        feedback="He developed and managed our e-learning platform, and the quality of work was incredible. The student dashboard, course management, payment workflow — everything works smoothly and feels very user-friendly. He also helped us maintain and update the platform regularly. A dependable developer who truly understands what a platform needs to grow."
        img={azizulImg}
        alt="azizul haque image"
        icon={<Facebook className="text-blue-400" width={28} height={28} />}
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Kazi Farhan Masum"
        designation="CTO, Puppetbrush"
        feedback="We needed a clean business website and someone who could help us with SEO. He handled both flawlessly. The website has a very polished look, loads quickly, and the SEO improvements helped us rank for several important keywords within weeks. Very knowledgeable, patient, and always ready to explain things. Great experience working with him."
        img={farhanImg}
        alt="farhan masum image"
        icon={<Linkedin width={28} height={28} />}
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Tanjina Tanha"
        designation="Founder, Treatos BD"
        feedback="He built our full online pet store along with a POS system for our physical shop, and it completely transformed the way we run our business. Managing products, orders, and stock is now super easy. The POS is smooth and stable, and the online store looks very professional. Truly reliable and skilled — we are very happy with the results."
        img={tanhaImg}
        alt="tanjina tanha image"
        icon={<Twitter className="text-cyan-400" width={28} height={28} />}
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Syed Mustafa Mehedi"
        designation="Founder, Qahaf"
        feedback="Our online clothing store was built from scratch, and the whole experience felt smooth and professional. The website looks modern, loads super fast, and the admin panel is very easy to manage. Thanks to him, we were able to launch Qahaf on time and start getting sales immediately. Great work ethic and great communication throughout the project."
        img={mehediImg}
        alt="mustafa mehedi image"
        icon={<Instagram className="text-pink-600" width={28} height={28} />}
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Rhituparna Das"
        designation="Co-founder, Shikdar Foundation"
        feedback="We needed a complete real estate management solution that could handle apartments, tenants, payments, and reporting in one place. He not only built exactly what we wanted but also added features we didn’t even think of. The system is fast, organized, and has made our daily operations way easier. His support after delivery was also excellent. Highly recommended!"
        img={rituImg}
        alt="ritu das image"
        icon={<Facebook className="text-blue-400" width={28} height={28} />}
      />
      <TestimonialCard
        color={spotlightBgColor}
        name="Rakib Shikder"
        designation="Founder, Retrofino"
        feedback="I wanted a premium sportswear e-commerce website, and he delivered beyond expectations. From product filtering to the cart, checkout, and inventory system, everything works perfectly. The UI is clean and gives a branded feel. He was proactive, solved problems quickly, and always kept us updated. We’ll definitely work with him again!"
        img={RakibImage}
        alt="rakib shikdar image"
        icon={<Instagram className="text-pink-600" width={28} height={28} />}
      />
    </div>
  );
}
