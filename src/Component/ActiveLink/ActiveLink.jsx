import { NavLink } from "react-router-dom";
const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border-b-2 bg-blue-400 text-white   border-b-blue-500 font-bold p-1 mx-2"
          : ""
      }
    >
      {" "}
      {children}
    </NavLink>
  );
};

export default ActiveLink;
