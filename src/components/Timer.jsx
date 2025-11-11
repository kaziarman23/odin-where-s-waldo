import { useEffect, useState } from "react";

function Timer({ startTime, gameFinished }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!startTime || gameFinished) return;
    const interval = setInterval(() => {
      setElapsed(Date.now() - startTime);
    }, 100);
    return () => clearInterval(interval);
  }, [startTime, gameFinished]);

  const seconds = Math.floor(elapsed / 1000);
  const milliseconds = elapsed % 1000;

  return (
    <div className="text-xl mb-2">
      Time: {seconds}.{Math.floor(milliseconds / 100)}s
    </div>
  );
}

export default Timer;
