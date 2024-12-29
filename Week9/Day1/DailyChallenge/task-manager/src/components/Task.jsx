import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const Task = ({ task }) => {
  const { dispatch, editInputRef } = useTaskContext();
  const [editing, setEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);

  const handleEditClick = () => {
    setEditing(true);
    setTaskText(task.text); 
  };

  const handleSave = () => {
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: taskText } });
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            ref={editInputRef}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.text}</span>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
