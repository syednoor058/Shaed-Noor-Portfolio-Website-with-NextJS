import Image from "next/image";
import CountUp from "../ui/count-up";

function CountUpCard({ name, number = 0, symbol = "", imgSrc, alt }) {
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
      <div className="w-full h-full absolute -z-[1] -left-2 -top-2">
        <div className="w-8 aspect-square relative overflow-hidden">
          <Image
            src={imgSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CountUpCard;
