import { useSelector } from "react-redux";

function ActiveTodos() {
  const todos = useSelector(state => state.todos);

  const activeTodos = todos.filter((todo) => todo.status === "active");

  const renderedActiveTodos = activeTodos.map((todo) => <li key={todo.name}>{todo.name}</li>)

  return <div>
    <ul>
      {renderedActiveTodos}
    </ul>
  </div>;
}

export default ActiveTodos;
