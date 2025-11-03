import { CircleCheck, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../Buttons/buttons";
import { CardSpotlight } from "../ui/card-spotlight";
import CountUp from "../ui/count-up";

export function CountUpCard({ name, number = 0, symbol = "", icon }) {
  return (
    <div className="flex flex-col gap-1 lg:gap-2 relative">
      <div className="flex flex-row items-center">
        <CountUp
          from={0}
          to={number}
          delay={0.5}
          separator=","
          direction="up"
          duration={2}
          className="text-3xl font-bold  text-white"
        />{" "}
        <span className="ps-[2px] text-3xl font-extrabold  text-white">
          {symbol}
        </span>
      </div>
      <div className="text-sm lg:text-base">{name}</div>
      <div className="w-full h-full absolute -z-[1] -left-3.5 -top-2">
        <div className="w-8 aspect-square relative overflow-hidden">{icon}</div>
      </div>
    </div>
  );
}

export function ServiceCard({ title, features, desc, icon, color = "" }) {
  return (
    <CardSpotlight
      color={color}
      className="hover:transform hover:-translate-y-2  hover:drop-shadow-2xl transition-all duration-300 hover:scale-[103%] rounded-[10px]"
    >
      <div className="flex flex-col gap-5 relative z-[5]">
        <div className="flex">
          <div className="p-2 rounded-xs bg-gradient-to-tr from-violet-600 to-sky-500 text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
          {title}
        </h3>
        <div className="flex flex-col gap-2">
          <div>Key features:</div>
          <ul className="flex flex-col gap-1">
            {features.map((feature, index) => (
              <li key={index} className="flex flex-row gap-2 items-start">
                <span className="text-green-500 pt-1">
                  <CircleCheck width={18} height={18} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <p>{desc}</p>
      </div>
    </CardSpotlight>
  );
}

export function ProjectCard({
  title,
  desc,
  demo = "",
  github = "",
  color = "",
  img,
  alt = "",
  addOns = [],
}) {
  return (
    <CardSpotlight
      color={color}
      className="hover:transform hover:-translate-y-2  hover:drop-shadow-2xl transition-all duration-300 hover:scale-[103%] lg:p-4 group"
    >
      <div className="flex flex-col gap-5 relative z-[5]">
        <div className="w-full aspect-video rounded-xs relative overflow-hidden">
          <Image
            src={img}
            alt={alt}
            className="w-ful h-full object-cover group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="w-full flex flex-row gap-2 items-center justify-end">
          <PrimaryButton
            url={demo}
            icon={<ExternalLink width={18} height={18} />}
            className="text-sm rounded-full"
            small={true}
          />
          <SecondaryButton
            className="text-sm rounded-full"
            url={github}
            icon={<Github width={18} height={18} />}
            small={true}
          />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
          {title}
        </h3>

        {addOns.length > 0 && (
          <ul className="flex flex-col gap-1">
            {addOns.map((addOn, index) => (
              <li key={index} className="flex flex-row gap-2 items-start">
                <span className="text-green-500 pt-1">
                  <CircleCheck width={18} height={18} />
                </span>
                {addOn}
              </li>
            ))}
          </ul>
        )}
        <p>{desc}</p>
      </div>
    </CardSpotlight>
  );
}

export function TestimonialCard({
  name,
  designation,
  feedback,
  color = "",
  img,
  alt = "",
  icon,
  iconBg = "",
}) {
  return (
    <CardSpotlight
      color={color}
      className="hover:transform hover:-translate-y-2 rounded-[10px] hover:drop-shadow-2xl transition-all duration-300 hover:scale-[103%] px-4 lg:px-4 py-8 lg:py-10 group bg-gradient-to-tr from-[#050505] via-black to-[#050505]"
    >
      <div className="flex flex-col gap-5 relative z-[5] justify-between">
        <div className="w-full flex justify-center items-center">
          <div className="w-16 aspect-square rounded-full relative">
            <Image
              src={img}
              alt={alt}
              className="w-ful h-full object-cover group-hover:scale-110 transition-all duration-500 relative z-[3] rounded-full"
            />
            <div
              className={`w-7 -top-2 -left-3 aspect-square absolute inset-0 flex justify-center items-center rounded-full ${iconBg} z-[5]`}
            >
              {icon}
            </div>
          </div>
        </div>
        <p className="text-center">{feedback}</p>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight text-center">
            {name}
          </h3>
          <p className="text-center">{designation}</p>
        </div>
      </div>
    </CardSpotlight>
  );
}
