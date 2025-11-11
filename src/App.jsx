import React, { useState, useEffect } from "react";
import GameImage from "./components/GameImage";
import Timer from "./components/Timer";
import ScoreModal from "./components/ScoreModal";

function App() {
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);

  const allCharacters = ["Waldo", "Wizard", "Odlaw"];

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleCharacterFound = (name) => {
    setFoundCharacters((prev) => {
      const updated = [...prev, name];
      if (updated.length === allCharacters.length) {
        setGameFinished(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Photo Tag Game</h1>
      <Timer startTime={startTime} gameFinished={gameFinished} />
      <GameImage
        foundCharacters={foundCharacters}
        onCharacterFound={handleCharacterFound}
        allCharacters={allCharacters}
      />
      {gameFinished && (
        <ScoreModal
          timeMs={Date.now() - startTime}
          onSubmit={(name) => console.log("Submit score for", name)}
        />
      )}
    </div>
  );
}

export default App;
