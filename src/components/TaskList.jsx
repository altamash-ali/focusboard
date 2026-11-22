
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onStatusChange,
  onDelete,
  onEdit,
}) {
  return (
    <section className="task-section" id="tasks">
      <div className="section-heading">
        <div>
          <h2>My Tasks</h2>
          <p>Track and manage your daily activities.</p>
        </div>

        <span>{tasks.length} Tasks</span>
      </div>

      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <p className="empty-message">No tasks found.</p>
        )}
      </div>
    </section>
  );
}

export default TaskList;