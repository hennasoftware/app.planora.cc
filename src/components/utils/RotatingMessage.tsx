import { useEffect, useState } from "react";

import useRotatingMessages from "../../hooks/useRotatingMessages.ts";
import type Trip from "../../types/Trip.ts";

type RotatingMessageProps = {
  trip: Trip;
};

export default function RotatingMessage({ trip }: RotatingMessageProps) {
  const messages = useRotatingMessages(trip.startDate);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!messages.length) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  if (!messages.length) return null;

  return (
    <div className="mx-auto w-full max-w-lg rounded-xl bg-white/25 py-6 text-center text-sm font-semibold text-white md:text-base">
      <p className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
}
