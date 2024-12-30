import React from 'react';

const TaskDisplay = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-display">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => onEdit(task.id, prompt('Edit task', task.text))}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No tasks for this day.</p>
      )}
    </div>
  );
};

export default TaskDisplay;



