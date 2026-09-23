export default function LapList({ laps }) {
  if (laps.length === 0) {
    return <p className="no-laps">No laps yet</p>;
  }
  return (
    <ol className="lap-list">
      {laps.map((lapTime, index) => (
        <li key={index}>
          Lap {index + 1}:{lapTime}
        </li>
      ))}
    </ol>
  );
}
