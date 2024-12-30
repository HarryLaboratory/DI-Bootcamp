import React, { useState } from 'react';
import { useDispatch } from 'react-redux';  
import { addTask } from '../redux/taskSlice';  

const TaskInput = ({ selectedDate }) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // To dispatch the action to add a new task
      dispatch(addTask({ taskName: task, date: new Date(selectedDate) }));
      setTask('');  // To clear the input field after submission
    }
  };

  return (
    <div className="task-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;




