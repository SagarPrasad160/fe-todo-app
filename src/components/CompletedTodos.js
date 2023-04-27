import { useSelector } from "react-redux";

import { store } from "../store";

function CompletedTodos() {
  console.log(store.getState());
  const todos = useSelector((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.status === "completed");
  const renderedCompletedTodos = completedTodos.map((todo) => (
    <li key={todo.name}>{todo.name}</li>
  ));
  return (
    <div>
      <ul>{renderedCompletedTodos}</ul>
    </div>
  );
}

export default CompletedTodos;
