import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, isDone = false }) => {

  const taskDone = (toggle) => {
    return (
      tasks
      .filter(task => task.done === toggle)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ))
    )
  };

  return (
    <div>
      <table className="table table-dark table-striped border-secondary ">
        <thead>
          <tr>
            <th> Task {isDone && "Completed"}</th>
          </tr>
        </thead>
        <tbody>{taskDone(isDone)}</tbody>
      </table>
    </div>
  );
};
