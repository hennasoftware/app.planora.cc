import { useEffect, useState } from "react";

import calculateTimeLeft from "../../services/calculateTimeLeft.ts";

type CountdownProps = {
  targetDate: string;
};

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate ?? ""));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate ?? ""));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex w-full items-center justify-between gap-1 md:gap-4">
      <div className="flex w-1/4 flex-col items-center justify-center rounded-xl bg-white/90 p-4">
        <span className="text-4xl font-extrabold text-purple-500 md:text-6xl lg:text-8xl">{timeLeft.days}</span>
        <span className="text-xs font-bold text-gray-500 md:text-sm lg:text-base">DIAS</span>
      </div>

      <div className="flex w-1/4 flex-col items-center justify-center rounded-xl bg-white/90 p-4">
        <span className="text-4xl font-extrabold text-pink-500 md:text-6xl lg:text-8xl">{timeLeft.hours}</span>
        <span className="text-xs font-bold text-gray-500 md:text-sm lg:text-base">HORAS</span>
      </div>

      <div className="flex w-1/4 flex-col items-center justify-center rounded-xl bg-white/90 p-4">
        <span className="text-4xl font-extrabold text-orange-500 md:text-6xl lg:text-8xl">{timeLeft.minutes}</span>
        <span className="text-xs font-bold text-gray-500 md:text-sm lg:text-base">MINUTOS</span>
      </div>

      <div className="flex w-1/4 flex-col items-center justify-center rounded-xl bg-white/90 p-4">
        <span className="text-4xl font-extrabold text-red-500 md:text-6xl lg:text-8xl">{timeLeft.seconds}</span>
        <span className="text-xs font-bold text-gray-500 md:text-sm lg:text-base">SEGUNDOS</span>
      </div>
    </div>
  );
}
