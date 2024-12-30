import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from './redux/taskSlice'; 
import TaskInput from './components/TaskInput';
import TaskDisplay from './components/TaskDisplay';
import Calendar from './components/Calendar'; 

function App() {
  const selectedDate = useSelector((state) => state.tasks.selectedDate); 
  const tasks = useSelector((state) => state.tasks.tasksByDate[selectedDate] || []); // To Fetch tasks for the selected date
  const dispatch = useDispatch();

  // To handle adding a new task
  const handleAddTask = (taskText) => {
    dispatch(addTask({ taskName: taskText, date: new Date(selectedDate) }));
  };

  // To handle deleting a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask({ date: new Date(selectedDate), taskId }));
  };

  // To handle editing a task
  const handleEditTask = (taskId, newText) => {
    dispatch(updateTask({ date: new Date(selectedDate), taskId, newText }));
  };

  return (
    <div className="App">
      <h1>Daily Planner</h1>

      {/* Calendar Component */}
      <Calendar />

      {/* Task Input */}
      <TaskInput selectedDate={selectedDate} onAddTask={handleAddTask} />

      {/* Task Display */}
      <TaskDisplay tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
    </div>
  );
}

export default App;








