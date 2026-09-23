import LapList from "./LapList";
import { useRef } from "react";
import { useStopwatch } from "./useStopwatch";

export default function Stopwatch() {
  const { tenths, isRunning, laps, start, pause, reset, addLap } =
    useStopwatch();
  const startButtonRef = useRef(null);

  function formatTime(t) {
    const seconds = Math.floor(t / 10);
    const decimal = t % 10;
    return `${seconds}.${decimal}s`;
  }

  function handleReset() {
    reset();
    startButtonRef.current.focus();
  }
  return (
    <div className="stopwatch">
      <h1>Practice Stopwatch</h1>
      <p className="time">{formatTime(tenths)}</p>
      <div className="buttons">
        <button ref={startButtonRef} onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={pause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={addLap} disabled={!isRunning}>
          Lap
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <LapList laps={laps} />
    </div>
  );
}
