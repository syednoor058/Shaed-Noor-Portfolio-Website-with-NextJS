import { CircleCheck } from "lucide-react";
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
          className="text-3xl font-bold text-neutral-800 dark:text-white"
        />{" "}
        <span className="ps-[2px] text-3xl font-extrabold text-neutral-800 dark:text-white">
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
    <CardSpotlight color={color}>
      <div className="flex flex-col gap-5 relative z-[5]">
        <div className="flex">
          <div className="p-2 rounded-xs bg-gradient-to-tr from-violet-600 to-sky-500 text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold dark:text-white leading-tight">
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
