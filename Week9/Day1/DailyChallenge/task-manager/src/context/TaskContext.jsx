import React, { createContext, useContext, useReducer, useRef } from 'react';
import { taskReducer, initialState } from './taskReducer';

// Context for the task manager
const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const editInputRef = useRef(null); 

  return (
    <TaskContext.Provider value={{ state, dispatch, editInputRef }}>
      {children}
    </TaskContext.Provider>
  );
};
