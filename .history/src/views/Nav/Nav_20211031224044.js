import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>{" "}
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <a href="/todo">Todos</a>
        <a href="/about">About</a>
      </div>
    );
  }
}
export default Nav;
