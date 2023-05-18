import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (<>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Home
    </NavLink>;
    <NavLink
      to="/contact"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Contact
    </NavLink>;
  </>);
}
export default Menu;