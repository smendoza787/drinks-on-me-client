import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

class NavBar extends Component {
  render() {
    return (
      <AppBar
      title="Drinks On Me"
      style={{ backgroundColor: '#C02727', zIndex: '10'}}
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
}

export default NavBar;
