import React, { useState } from 'react';
import DatePickerComponent from './components/DatePickerComponent';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleDateSelect = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  return (
    <div>
      <h1>Daily Planner</h1>
      <DatePickerComponent onDateSelect={handleDateSelect} />
      <AddTask selectedDate={selectedDate} />
      <TaskList selectedDate={selectedDate} />
    </div>
  );
};

export default App;

