import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { name, status } = action.payload;
      state.push({ name, status });
    },
    markTodoComplete(state, action) {
      const { name } = action.payload;
      console.log(name);
      state = state.map((todo) => {
        if (todo.name === name) {
          todo.status = "completed";
          return todo;
        }
        return todo;
      });
    },
    removeTodo(state, action) {
      const { name } = action.payload;
      return state.filter((todo) => todo.name !== name);
    },
  },
});

export const todosSliceReducer = todosSlice.reducer;
export const { addTodo, removeTodo, markTodoComplete } = todosSlice.actions;
