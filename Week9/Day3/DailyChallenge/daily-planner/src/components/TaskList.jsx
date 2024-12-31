import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../store/taskSlice';

const TaskList = ({ selectedDate }) => {
  const tasks = useSelector((state) => state.tasks[selectedDate]) || [];
  const dispatch = useDispatch();

  const handleEdit = (taskId, newContent) => {
    dispatch(editTask({ date: selectedDate, taskId, newTaskContent: newContent }));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask({ date: selectedDate, taskId }));
  };

  return (
    <div>
      <h3>Tasks for {selectedDate}</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.content}
            <button onClick={() => handleEdit(task.id, prompt('Edit Task', task.content))}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
