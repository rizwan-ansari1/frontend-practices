import { useTasks } from "./TasksContext";
import Task from "./Task";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
