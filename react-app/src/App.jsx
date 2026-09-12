import { TaskProvider } from "./TasksContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

export default function App() {
  return (
    <TaskProvider>
      <h1>Weekend To-Do List</h1>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}
