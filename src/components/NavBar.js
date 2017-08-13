import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (<div className="navbar">
    <NavLink
      style={{ marginRight: '10px'}}
      to="/" >
      Home
    </NavLink>
    <NavLink
      style={{ marginRight: '10px'}}
      to="/about" >
      About
    </NavLink>
  </div>)
}

export default NavBar;
