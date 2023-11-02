import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask } from "./operations";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;

        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;

        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );

        state.items.splice(index, 1);
      });
  },
});

export const tasksReducer = tasksSlice.reducer;

export const selectTodos = (state) => state.todos;

// export const counterSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.push(action.payload);
//     },
//     deleteTask: (state, action) => {
//       return state.filter((task) => task.id !== action.payload);
//     },

//     toggleCompleted: (state, action) => {
//       const index = state.findIndex((todo) => todo.id === action.payload);
//       state[index] = { ...state[index], completed: !state[index].completed };
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addTask, deleteTask, toggleCompleted } = counterSlice.actions;

// export const todosReducer = counterSlice.reducer;

// export const todosSelector = (state) => state.todos;
