import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const NavBar = () => {
  return (
    <AppBar
    title="Drinks On Me"
    style={{ backgroundColor: '#2196F3', zIndex: '10', alignItems: 'center', color: '#000' }}
    showMenuIconButton={false} >
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
    </AppBar>
  )
}

export default NavBar;
