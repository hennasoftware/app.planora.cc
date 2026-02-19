import { useEffect, useState } from "react";

import calculateTimeLeft from "../../services/calculateTimeLeft.ts";
import { getRotatingMessages } from "../../services/getRotatingMessage.ts";
import type Trip from "../../types/Trip.ts";

type RotatingMessageProps = {
  trip: Trip;
};

export default function RotatingMessage({ trip }: RotatingMessageProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [messages, setMessages] = useState<string[]>([""]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const updateMessages = () => {
      const timeLeft = calculateTimeLeft(trip.startDate);
      const totalSeconds =
        parseInt(timeLeft.days) * 24 * 3600 +
        parseInt(timeLeft.hours) * 3600 +
        parseInt(timeLeft.minutes) * 60 +
        parseInt(timeLeft.seconds);

      const newMessages = getRotatingMessages(totalSeconds);

      setMessages(newMessages);
    };

    updateMessages();

    const interval = setInterval(updateMessages, 60000);

    return () => clearInterval(interval);
  }, [trip.startDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="mx-auto w-full max-w-lg rounded-xl bg-white/25 py-6 text-center text-sm font-semibold text-white md:text-base">
      <p className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
}
