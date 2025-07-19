import Image from "next/image";
import treatosBd from "../../../public/images/projects/petshop-homepage.webp";
import propsuitSS from "../../../public/images/projects/propsuit-screenshot-1.webp";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function ProjectsBentoGrid() {
  return (
    <BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const ImageHeader = ({ img, alt }) => (
  <div className="w-full aspect-video relative overflow-hidden">
    <Image src={img} alt={alt} className="w-full h-full object-cover" />
  </div>
);
const items = [
  {
    title: "Comprehensive Real Estate Management System",
    description:
      "A full-stack web platform to streamline real estate operations, enabling agents and admins to manage listings, leads, and clients efficiently. Built with modern architecture to ensure scalability and performance.",
    image: (
      <ImageHeader
        img={propsuitSS}
        alt="propsuit real estate management system screenshot"
      />
    ),
  },
  {
    title: "Full Sportswear E-commerce Web Application",
    description:
      "An end-to-end eCommerce experience for a sportswear brand — featuring product filtering, shopping cart, checkout, payment gateway integration, and admin management tools. Designed for responsiveness and high conversion.",
    image: <ImageHeader img={treatosBd} alt="petshop ecommerce screenshot" />,
  },
  {
    title: "Dynamic Pet Shop E-commerce Website",
    description:
      "A personalized shopping experience for pet lovers. Integrated product recommendations, multi-category filtering, cart functionality, and localStorage-based checkout. Built for seamless UX and fast performance.",
    image: (
      <ImageHeader
        img={propsuitSS}
        alt="propsuit real estate management system screenshot"
      />
    ),
  },
  {
    title: "Responsive Software Agency Website",
    description:
      "A fully responsive and blazing-fast website built with Next.js and Tailwind CSS for a software agency. Features include service breakdowns, portfolio showcase, and a smooth dark/light theme toggle.",
    image: <ImageHeader img={treatosBd} alt="petshop ecommerce screenshot" />,
  },
  {
    title: "WordPress Plugins Automation with Playwright",
    description:
      "Designed a test automation suite using Playwright to improve plugin quality and speed up QA by 35%. Set up Playwright with Node.js and configured browser environments. Automated admin/user login and plugin installation workflows. Wrote end-to-end test scripts for forms, data handling, and UI behaviors. Achieved near 100% test coverage for plugin functionality. Integrated testing into CI/CD pipelines for continuous validation.",
    image: (
      <ImageHeader
        img={propsuitSS}
        alt="propsuit real estate management system screenshot"
      />
    ),
  },
];
