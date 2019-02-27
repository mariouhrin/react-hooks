import React, { useState } from "react";

export function MultiToggleButtons() {
  const [toggleL, setToggleL] = useState(false);
  const [toggleR, setToggleR] = useState(false);

  return (
    <>
      <div style={{ height: "150px" }}>
        <button className="btn-blue" onClick={() => setToggleL(!toggleL)}>
          Toggle Left
        </button>
        <button className="btn-green" onClick={() => setToggleR(!toggleR)}>
          Toggle Right
        </button>
        {toggleL && <h3>Left toggle content</h3>}
        {toggleR && <h3>Right toggle content</h3>}
      </div>
    </>
  );
}
