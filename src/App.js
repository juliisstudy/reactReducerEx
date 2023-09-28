import "./styles.css";

import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { TasksProvider } from "./TasksContext";

export default function App() {
  return (
    <div className="App">
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </div>
  );
}
