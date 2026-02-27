import { useEffect, useState } from "react";

import calculateTimeLeft from "../services/calculateTimeLeft.ts";
import { getRotatingMessages } from "../services/getRotatingMessages.ts";

export default function useRotatingMessages(tripStartDate: string) {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    function updateMessages() {
      const timeLeft = calculateTimeLeft(tripStartDate);

      const totalSeconds =
        Number(timeLeft.days) * 86400 +
        Number(timeLeft.hours) * 3600 +
        Number(timeLeft.minutes) * 60 +
        Number(timeLeft.seconds);

      setMessages(getRotatingMessages(totalSeconds));
    }

    updateMessages();

    const interval = setInterval(updateMessages, 60000);
    return () => clearInterval(interval);
  }, [tripStartDate]);

  return messages;
}
