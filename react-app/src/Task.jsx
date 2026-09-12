import { useTaskDispatch } from "./TasksContext";

export default function Task({ task }) {
  const dispatch = useTaskDispatch();

  function handleToggel(e) {
    dispatch({
      type: "changed",
      task: { ...task, done: e.target.checked },
    });
  }

  function handleDelete() {
    dispatch({
      type: "delete",
      id: task.id,
    });
  }

  return (
    <div className={`task ${task.done ? "done" : ""}`}>
      <input type="checkbox" checked={task.done} onChange={handleToggel} />
      <span>{task.text}</span>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
