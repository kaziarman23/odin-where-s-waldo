import React, { useState, useRef } from "react";
import TargetBox from "./TargetBox";
import Dropdown from "./Dropdown";
import Marker from "./Marker";

function GameImage({ foundCharacters, onCharacterFound, allCharacters }) {
  const imgRef = useRef();
  const [clickPos, setClickPos] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [markers, setMarkers] = useState([]);

  const handleClick = (e) => {
    if (dropdownOpen) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setClickPos({
      x,
      y,
      pixelX: e.clientX - rect.left,
      pixelY: e.clientY - rect.top,
    });
    setDropdownOpen(true);
  };

  const handleSelect = async (name) => {
    // call backend /api/check
    const res = await fetch("http://localhost:4000/api/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, x: clickPos.x, y: clickPos.y }),
    });
    const data = await res.json();
    if (data.correct) {
      onCharacterFound(name);
      setMarkers((prev) => [
        ...prev,
        { name, x: clickPos.pixelX, y: clickPos.pixelY },
      ]);
    }
    setDropdownOpen(false);
    setClickPos(null);
  };

  return (
    <div className="relative">
      <img
        ref={imgRef}
        src="/public/game.jpg"
        alt="Game"
        onClick={handleClick}
        className="max-w-full border-2 border-gray-300"
      />
      {clickPos && dropdownOpen && (
        <TargetBox x={clickPos.pixelX} y={clickPos.pixelY}>
          <Dropdown
            options={allCharacters.filter((c) => !foundCharacters.includes(c))}
            onSelect={handleSelect}
          />
        </TargetBox>
      )}
      {markers.map((m, i) => (
        <Marker key={i} x={m.x} y={m.y} name={m.name} />
      ))}
    </div>
  );
}

export default GameImage;
