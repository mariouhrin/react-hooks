import { useEffect } from "react";
import { getRandomColor } from "./helpers";

export function useBackgroundTimer(toggleLState) {
  const timer = useEffect(() => {
    setTimeout(() => {
      const colorful = document.querySelectorAll(".colorful-custom-hook")[0];
      colorful.style.background = getRandomColor();
    }, 1000);
    return () => clearTimeout(timer);
  }, [toggleLState]);
}
