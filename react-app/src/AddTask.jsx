import { useState } from "react";
import { useTaskDispatch } from "./TasksContext";

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTaskDispatch();

  function handleAdd() {
    if (text.trim() === "") return;
    dispatch({
      type: "added",
      id: nextId++,
      text,
    });
    setText("");
  }

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
