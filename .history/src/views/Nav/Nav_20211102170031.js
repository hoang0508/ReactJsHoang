import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active">
          Todo
        </NavLink>{" "}
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/user" activeClassName="active">
          User
        </NavLink>
        {/* <a href="/todo">Todos</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}
export default Nav;
