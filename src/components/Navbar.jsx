import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/routers" activeClassName="active">
            Routers
          </NavLink>
        </li>
        <li>
          <NavLink to="/access-points" activeClassName="active">
            Access Points
          </NavLink>
        </li>
        <li>
          <NavLink to="/obstacles" activeClassName="active">
            Obstacles
          </NavLink>
          <NavLink to="/charts" activeClassName="active">
            Charts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
