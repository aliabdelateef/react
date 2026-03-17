function TaskItem({ task, onToggle, onDelete }) {
  if (!task) return null;

  const isCompleted = Boolean(task.completed);

  const itemStyle = {
    textDecoration: isCompleted ? "line-through" : "none",
    color: isCompleted ? "gray" : "black",
    opacity: isCompleted ? 0.6 : 1,
  };

  const priorityColors = {
    high: "red",
    medium: "orange",
    low: "blue",
  };

  const priority = task.priority || "low";

  return (
    <li className="task-item">
      <span
        className="task-text"
        onClick={() => onToggle?.(task.id)}
        style={itemStyle}
      >
        {isCompleted ? "👍" : "❌"} {task.name || "بدون اسم"}

        <span
          className="priority-badge"
          style={{ backgroundColor: priorityColors[priority] }}
        >
          {priority === "high" && "🔥"}
          {priority === "medium" && "⚡"}
          {priority === "low" && "❄️"}
        </span>
      </span>

      {isCompleted && (
        <button
          className="delete-btn"
          onClick={() => onDelete?.(task.id)}
        >
          حذف
        </button>
      )}
    </li>
  );
}

export default TaskItem;