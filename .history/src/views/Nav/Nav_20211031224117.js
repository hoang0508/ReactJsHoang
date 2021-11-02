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
        <NavLink to="/todo" activeClassName="active">
          Todo
        </NavLink>{" "}
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        {/* <a href="/todo">Todos</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}
export default Nav;
