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
      <div className="col-sm-12 col-md-12 col-xl-8 py-1">
        <input
          type="text"
          value={newTask}
          placeholder="Enter a new task"
          onChange={(e) => setnewTask(e.target.value)}
          className="form-control col-12"
        />
      </div>
      <div className="col-sm-12 col-md-12 col-xl-4 py-1">
        <button className="btn btn-primary col-12">Save Task</button>
      </div>
    </form>
  );
};
