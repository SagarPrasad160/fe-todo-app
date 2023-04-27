import { useSelector, useDispatch } from "react-redux";

import { removeTodo, markTodoComplete } from "../store";

function AllTodos() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleComplete = (todo) => {
    dispatch(markTodoComplete(todo));
  };

  const renderedTodos = todos.map((todo) => (
    <li key={todo.name}>
      {todo.name}{" "}
      <button
        className="bg-blue-300 rounded p-1"
        onClick={() => handleComplete(todo)}
      >
        Done
      </button>{" "}
    </li>
  ));

  return (
    <div>
      <ul>{renderedTodos}</ul>
    </div>
  );
}

export default AllTodos;
