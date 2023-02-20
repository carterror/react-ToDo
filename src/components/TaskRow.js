export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td className="" >
      <div className="form-check py-2 d-flex justify-content-between">
      <label className="form-check-label" htmlFor={task.name}>
      {task.done ? <i class="bi bi-pass-fill"></i> : <i class="bi bi-pass"></i>}
      {task.name}
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.done}
            onChange={() => toggleTask(task)}
            id={task.name}
        />
       
      </div>
      </td>
    </tr>
  );
};
