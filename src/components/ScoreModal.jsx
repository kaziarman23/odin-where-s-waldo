import { useState } from "react";

function ScoreModal({ timeMs, onSubmit }) {
  const [name, setName] = useState("");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">You finished!</h2>
        <p className="mb-2">Time: {(timeMs / 1000).toFixed(2)}s</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border p-1 mb-2"
        />
        <button
          onClick={() => onSubmit(name)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ScoreModal;
