
import { useState } from "react";
import { X } from "lucide-react";

function TaskForm({ onSubmit, onCancel, initialTask }) {
  const [formData, setFormData] = useState({
    title: initialTask?.title || "",
    description: initialTask?.description || "",
    category: initialTask?.category || "",
    status: initialTask?.status || "To do",
    priority: initialTask?.priority || "Medium",
    dueDate: initialTask?.dueDate || "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Task title is required.");
      return;
    }

    onSubmit({
      ...formData,
      title: formData.title.trim(),
    });
  };

  return (
    <div className="modal-overlay">
      <div className="task-modal">
        <div className="modal-header">
          <h2>{initialTask ? "Edit Task" : "Create New Task"}</h2>

          <button type="button" onClick={onCancel} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Task Title *</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />

          {error && <p className="form-error">{error}</p>}

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your task"
          />

          <label>Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Development"
          />

          <label>Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>To do</option>
            <option>In progress</option>
            <option>Completed</option>
          </select>

          <label>Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />

          <div className="form-actions">
            <button type="button" onClick={onCancel}>
              Cancel
            </button>

            <button type="submit">
              {initialTask ? "Save Changes" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;