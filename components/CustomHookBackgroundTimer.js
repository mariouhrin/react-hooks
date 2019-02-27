import React, { useState } from "react";
import { useBackgroundTimer } from "./useBackgroundTimer";

export function CustomHookBackgroundTimer() {
  const [toggleL, setToggleL] = useState(false);
  const [toggleR, setToggleR] = useState(false);

  useBackgroundTimer(toggleL);

  return (
    <>
      <button className="btn-blue" onClick={() => setToggleL(!toggleL)}>
        Toggle Left
      </button>
      <button className="btn-green" onClick={() => setToggleR(!toggleR)}>
        Toggle Right
      </button>
      <div className="colorful-custom-hook" />
    </>
  );
}
