import { useState } from "react";

export const TaskCreator = ({createTask}) => {
  const [newTask, setnewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    e.target.focussed = true;
    createTask(newTask)
    setnewTask("");
  }

  return (
    
      <form onSubmit={handleSubmit} className="form my-2 row">
      <div className="col-9">
        <input
          type="text"
          value={newTask}
          placeholder="Enter a new task"
          onChange={(e) => setnewTask(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary" >Save Task</button>
      </div>
      </form>
  );
};
