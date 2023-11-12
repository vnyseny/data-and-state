import TaskContext from "./Hooks/TaskContext";
import Tasks from "./Tasks";
import React from "react";

var taskList = [
  {
    id: 1,
    desc: "Breakfast",
    isDone: false,
  },
  {
    id: 2,
    desc: "Bath",
    isDone: false,
  },
  {
    id: 3,
    desc: "Plan week's work and send",
    isDone: false,
  },

];
function App() {
  const taskState = React.useState(taskList);
  return (
    <div>
      <TaskContext.Provider value={taskState} >
      <Tasks />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
