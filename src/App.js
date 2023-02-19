import "./App.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { DisplayControl } from "./components/DisplayControl";

function App() {
  const [taskItems, settaskItems] = useState([]);

  const [showDone, setshowDone] = useState(false);

  useEffect(() => {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
      settaskItems(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  function addTask(task) {
    settaskItems([...taskItems, task]);
  }

  const toggleTask = (task) => {
    settaskItems(
      taskItems.map((t) => {
        if (t.name === task.name) {
          return { ...t, done: !t.done };
        } else {
          return t;
        }
      })
    );
  };

  function createTask(taskName) {
    if (!taskItems.find((taskItems) => taskItems.name === taskName)) {
      addTask({ name: taskName, done: false });
    } else {
      Swal.fire({
        title: "Error!",
        text: "This task already exists",
        icon: "error",
        confirmButtonText: "Ok!",
      });
    }
  }

  const cleanTask = () => {
    settaskItems(taskItems.filter((taskItem) => !taskItem.done))
    setshowDone(false)
  }


  return (
    <div className="App">
      <div className="container p-3 col-md-4 offset-md-4 ">
        <TaskCreator createTask={createTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        <DisplayControl isCheked={showDone} setshowDone={(checked) => setshowDone(checked)} cleanTask = {cleanTask}/>

        {showDone === true && (
          <TaskTable tasks={taskItems} toggleTask={toggleTask} isDone={true} />
        )}
      </div>
    </div>
  );
}

export default App;
