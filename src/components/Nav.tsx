import React from "react";
import { NavLink } from "react-router-dom";
import ColorPicker from "./ThemePicker";

function Nav() {
  return (
    <nav className="">
      <NavLink to="/settings" className="mx-2 active:text-blue-500">
        Settings
      </NavLink>
      <NavLink to="/" className="mx-2 active:text-blue-500">
        En cours
      </NavLink>
      <NavLink to="/done" className="mx-2 active:text-blue-500">
        Terminées
      </NavLink>
    </nav>
  );
}

export default Nav;
