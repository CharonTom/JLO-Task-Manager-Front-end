import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="">
      <NavLink to="/" className="mx-2">
        En cours
      </NavLink>
      <NavLink to="/done" className="mx-2">
        Terminé
      </NavLink>
    </nav>
  );
}

export default Nav;
