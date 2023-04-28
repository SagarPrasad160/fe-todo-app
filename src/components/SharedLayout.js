import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

import InputTodo from "./InputTodo";

import Background from "./Background/Background";

function SharedLayout() {
  return (
    <div className="flex flex-col">
      <Background />
      <div className="flex flex-col justify-center items-center z-10 h-full">
        <InputTodo />
        <Outlet />
        <NavBar />
      </div>
    </div>
  );
}

export default SharedLayout;
