export const initialState = {
    tasks: [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Build a project', completed: true },
      { id: 3, text: 'Read a book', completed: false }
    ],
    filter: 'all',  // 'all', 'completed', 'active'
    editTaskId: null
  };
  
  export const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, text: action.payload.text } : task
          ),
          editTaskId: null
        };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          )
        };
      case 'FILTER_TASKS':
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  