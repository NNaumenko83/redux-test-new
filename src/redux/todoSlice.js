import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const counterSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },

    toggleCompleted: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index] = { ...state[index], completed: !state[index].completed };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, toggleCompleted } = counterSlice.actions;

export const todosReducer = counterSlice.reducer;

// Селектор

export const todosSelector = (state) => state.todos;
