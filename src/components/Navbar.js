import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <NavLink to='/'>
      <Menu.Item>Home</Menu.Item>
    </NavLink>
    <NavLink to='/account/profile'>
      <Menu.Item>username</Menu.Item>
    </NavLink>
  </Menu>
);

export default Navbar;
