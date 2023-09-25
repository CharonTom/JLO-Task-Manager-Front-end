import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="">
      <NavLink to="/settings" className="mx-2 active:text-blue-500">
        Paramètres
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
