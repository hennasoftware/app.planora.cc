import { useEffect, useState } from "react";

import type LoadingStep from "../types/LoadingStep";

export default function useLoading(steps: LoadingStep[]) {
  const [message, setMessage] = useState(steps[0]?.message ?? "");
  const [showRetry, setShowRetry] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timers: number[] = [];

    steps.forEach((step) => {
      const timer = window.setTimeout(() => {
        setIsTransitioning(true);

        setTimeout(() => {
          setMessage(step.message);
          if (step.showRetry) setShowRetry(true);
          setIsTransitioning(false);
        }, 300);
      }, step.delay);

      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [steps]);

  return { message, showRetry, isTransitioning };
}
