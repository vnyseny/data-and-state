import React from "react";
import "./tasks.css"
import TaskContext from "./Hooks/TaskContext";

function Tasks() {

  const taskHandler=(e)=>{
    var res = tasks.map(element => {
      if(e.target.id == element.id){
        element.isDone = e.target.checked
      }
      return element
    });
    setTasks(res);
  }

   const [tasks,setTasks] = React.useContext(TaskContext)

  return (
    <details className="w200" open>
      <summary className="pl10">Tasks</summary>
      <ul>
        {tasks.map((x) => (
          <li key={x.id} className="pl10">
            <div className="task">
              <p>
              {x.desc}
              </p>
              <input type="checkbox" id={x.id} checked={x.isDone} onChange={taskHandler}/>
            </div>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default Tasks;
