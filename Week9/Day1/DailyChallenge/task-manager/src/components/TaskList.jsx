import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { state } = useTaskContext();

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;  
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
