import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div classname="topnav">
        <a classname="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    );
  }
}
export default Nav;
