import { configureStore } from "@reduxjs/toolkit";

import {
  todosSliceReducer,
  addTodo,
  removeTodo,
  markTodoComplete,
} from "./slices/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosSliceReducer,
  },
});

export { store, addTodo, removeTodo, markTodoComplete };
