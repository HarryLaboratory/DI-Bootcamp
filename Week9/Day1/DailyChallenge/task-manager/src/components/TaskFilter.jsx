import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskFilter = () => {
  const { dispatch } = useTaskContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'all' })}>Show All</button>
      <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'completed' })}>Show Completed</button>
      <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'active' })}>Show Active</button>
    </div>
  );
};

export default TaskFilter;
