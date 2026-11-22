
import { Trash2, Pencil } from "lucide-react";

function TaskItem({
  task,
  onStatusChange,
  onDelete,
  onEdit,
}) {
  return (
    <div className="task-item">
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.description}</p>

        <div className="task-meta">
          <span>{task.category}</span>

          <span className={`priority ${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>

          <span>Due: {task.dueDate || "Not set"}</span>
        </div>
      </div>

      <div className="task-actions">
        <select
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          aria-label={`Status for ${task.title}`}
        >
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
          aria-label={`Edit ${task.title}`}
        >
          <Pencil size={17} />
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;