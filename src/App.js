import "./App.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { DisplayControl } from "./components/DisplayControl";

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.toggleTimer)
  }
})

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

    let message = "";

    if (!task.done) {
      message = 'Congratulation, Task Completed!'
    } else {
      message = 'Task incompleted!'
    }

    Toast.fire({
      icon: 'success',
      title: message
    })
  };

  function createTask(taskName) {
    if (!taskItems.find((taskItems) => taskItems.name === taskName)) {
      addTask({ name: taskName, done: false });
      
      Toast.fire({
        icon: 'success',
        title: 'New task created!'
      })
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clean it!'
    }).then((result) => {
      if (result.isConfirmed) {
        settaskItems(taskItems.filter((taskItem) => !taskItem.done));
        setshowDone(false);

        Toast.fire({
          icon: 'success',
          title: 'Tasks has been cleaned!'
        })
      }
    })
    
  };

  return (
    <div className="App">
      <div className="container p-3 col-md-5 offset-md-4 ">
        <TaskCreator createTask={createTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        <DisplayControl
          isCheked={showDone}
          setshowDone={(checked) => setshowDone(checked)}
          cleanTask={cleanTask}
        />

        {showDone === true && (
          <TaskTable tasks={taskItems} toggleTask={toggleTask} isDone={true} />
        )}
      </div>
    </div>
  );
}

export default App;
