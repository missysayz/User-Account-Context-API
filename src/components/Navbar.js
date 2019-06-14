import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider";

const Navbar = () => (
  <UserConsumer>
    {value => (
      <Menu>
        <NavLink color='blue' to='/'>
          <Menu.Item>Home</Menu.Item>
        </NavLink>
        <NavLink to='/user/profile'>
          <Menu.Item>{value.firstName}</Menu.Item>
        </NavLink>
      </Menu>
    )}
  </UserConsumer>
);

export default Navbar;
