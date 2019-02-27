import React, { useState } from "react";

export function ToggleButton() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div style={{ height: "150px" }}>
        <button className="btn-blue" onClick={() => setToggle(!toggle)}>
          Toggle
        </button>
        {toggle && <h3>This is the content</h3>}
      </div>
    </>
  );
}
