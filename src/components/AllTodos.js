import { useSelector, useDispatch } from "react-redux";

import { removeTodo, markTodoComplete } from "../store";

import { store } from "../store";

function AllTodos() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleComplete = (todo) => {
    dispatch(markTodoComplete(todo));
  };

  const handleRemove = (todo) => {
    dispatch(removeTodo(todo));
    console.log(store.getState());
  };

  const renderedTodos = todos.map((todo) => (
    <li
      key={todo.name}
      style={{
        textDecoration: todo.status === "completed" ? "line-through" : "none",
      }}
    >
      {todo.name}{" "}
      <button
        className="bg-blue-300 rounded p-1 cursor-pointer"
        onClick={() => handleComplete(todo)}
      >
        Done
      </button>{" "}
      <button
        className="ml-2 bg-gray-300 p-1 rounded "
        onClick={() => handleRemove(todo)}
      >
        X
      </button>
    </li>
  ));

  return (
    <div>
      <ul>{renderedTodos}</ul>
    </div>
  );
}

export default AllTodos;
