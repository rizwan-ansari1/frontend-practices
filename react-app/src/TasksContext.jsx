import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

const intialTasks = [
  {
    id: 1,
    text: "Buy groceries",
    done: false,
  },
  {
    id: 2,
    text: "Read a chapter",
    done: true,
  },
];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    }
    case "delete": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      return tasks;
    }
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, intialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
export function useTasks() {
  return useContext(TasksContext);
}

export function useTaskDispatch() {
  return useContext(TasksDispatchContext);
}
