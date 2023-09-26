import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="">
      <NavLink to="/settings" className="mx-2">
        Paramètres
      </NavLink>
      <NavLink to="/" className="mx-2">
        En cours
      </NavLink>
      <NavLink to="/done" className="mx-2">
        Terminées
      </NavLink>
    </nav>
  );
}

export default Nav;
