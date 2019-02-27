import React, { useState, useEffect } from "react";
import { getRandomColor } from "./helpers";

export function BackgroundTimerOptimization() {
  const [toggleL, setToggleL] = useState(false);
  const [toggleR, setToggleR] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const colorful = document.querySelectorAll(".colorful-optimize")[0];
      colorful.style.background = getRandomColor();
    }, 1000);
  }, [toggleL]);

  return (
    <>
      <button className="btn-blue" onClick={() => setToggleL(!toggleL)}>
        Toggle Left
      </button>
      <button className="btn-green" onClick={() => setToggleR(!toggleR)}>
        Toggle Right
      </button>
      <div className="colorful-optimize" />
    </>
  );
}
