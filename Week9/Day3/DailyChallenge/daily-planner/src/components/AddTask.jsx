import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const AddTask = ({ selectedDate }) => {
  const [taskContent, setTaskContent] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskContent.trim()) {
      const task = {
        id: Date.now(),
        content: taskContent,
      };
      dispatch(addTask({ date: selectedDate, task }));
      setTaskContent('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
