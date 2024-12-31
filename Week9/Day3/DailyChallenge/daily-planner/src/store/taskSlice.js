import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state[date]) {
        state[date] = [];
      }
      state[date].push(task);
    },
    editTask: (state, action) => {
      const { date, taskId, newTaskContent } = action.payload;
      const task = state[date].find((t) => t.id === taskId);
      if (task) {
        task.content = newTaskContent;
      }
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      state[date] = state[date].filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
