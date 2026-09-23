import { useEffect, useRef, useState } from "react";
export function useStopwatch() {
  const [tenths, setTenths] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTenths((prev) => prev + 1);
    }, 100);
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  function addLap() {
    setLaps((prevLaps) => [...prevLaps, tenths]);
  }
  function reset() {
    setIsRunning(false);
    setTenths(0);
    setLaps([]);
  }

  return { tenths, isRunning, laps, start, pause, reset, addLap };
}
