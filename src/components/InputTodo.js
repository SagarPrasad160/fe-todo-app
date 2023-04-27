import { useDispatch } from "react-redux";

import { addTodo } from "../store";

import { useState } from "react";

function InputTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      name: input,
      status: "active",
    };
    dispatch(addTodo(todo));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="m-2 shadow "
          placeholder="enter todo"
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default InputTodo;
