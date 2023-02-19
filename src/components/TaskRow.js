export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
      <td>
        {task.name}
      </td>
    </tr>
  );
};
