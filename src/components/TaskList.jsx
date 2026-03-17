import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
  // للتحقق من البيانات في الكونسول بشكل صحيح:
  console.log("قائمة المهام الحالية:", tasks);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // مهم جداً لـ React لتتبع العناصر
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;