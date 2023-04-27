import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

import InputTodo from "./InputTodo";

function SharedLayout() {
  return (
    <div>
      <InputTodo />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default SharedLayout;
