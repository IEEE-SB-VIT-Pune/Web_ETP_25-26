import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  // Navbar active link style
  const activeStyle = {
    fontWeight: "bold",
    TextDecoration: "underline",
    color: "red",
  };

  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
}

// // Navbar active link style
// const activeStyle = {
//   fontWeight: "bold",
//   TextDecoration: "underline",
//   color: "red",
// };
