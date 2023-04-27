import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="flex  m-2">
        <NavLink
          to="/"
          className="text-blue-500 text-lg border-b-5 m-2"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
        >
          All
        </NavLink>
        <NavLink
          to="/active"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
          className="m-2 text-lg"
        >
          Active
        </NavLink>
        <NavLink
          to="/completed"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "blue" };
          }}
          className="m-2 text-lg"
        >
          Completed
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
