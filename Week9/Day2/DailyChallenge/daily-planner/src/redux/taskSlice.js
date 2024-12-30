import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = {
  tasksByDate: {}, 
  selectedDate: format(new Date(), "yyyy-MM-dd"), // Format yyyy-MM-dd
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = format(action.payload, "yyyy-MM-dd"); 
    },
    addTask: (state, action) => {
      const { taskName, date } = action.payload;
      const formattedDate = format(date, "yyyy-MM-dd");

      if (!state.tasksByDate[formattedDate]) {
        state.tasksByDate[formattedDate] = [];
      }

      state.tasksByDate[formattedDate].push({ text: taskName, id: Date.now() });
    },
    deleteTask: (state, action) => {
      const { date, taskId } = action.payload;
      const formattedDate = format(date, "yyyy-MM-dd");

      if (state.tasksByDate[formattedDate]) {
        state.tasksByDate[formattedDate] = state.tasksByDate[formattedDate].filter(
          (task) => task.id !== taskId
        );
      }
    },
    updateTask: (state, action) => {
      const { date, taskId, newText } = action.payload;
      const formattedDate = format(date, "yyyy-MM-dd");

      if (state.tasksByDate[formattedDate]) {
        const task = state.tasksByDate[formattedDate].find((t) => t.id === taskId);
        if (task) task.text = newText;
      }
    },
  },
});

export const { setSelectedDate, addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;









