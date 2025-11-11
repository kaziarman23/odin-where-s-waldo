import React from "react";

function TargetBox({ x, y, children }) {
  return (
    <div
      className="absolute border-2 border-red-500 rounded"
      style={{
        top: y - 20 + "px",
        left: x - 20 + "px",
        width: "40px",
        height: "40px",
      }}
    >
      {children}
    </div>
  );
}

export default TargetBox;
