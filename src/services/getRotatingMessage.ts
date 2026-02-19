import { rotatingMessages } from "../data/rotatingMessages";
import type RotatingMessages from "../types/RotatingMessages.ts";

export function getRotatingMessages(secondsLeft: number): string[] {
  const matchingRange = rotatingMessages.find((item: RotatingMessages) => {
    const { minSeconds, maxSeconds } = item.range;

    if (maxSeconds !== undefined) {
      return secondsLeft >= minSeconds && secondsLeft <= maxSeconds;
    }

    return secondsLeft >= minSeconds;
  });

  return matchingRange?.messages || ["A aventura está chegando! 🎉"];
}
