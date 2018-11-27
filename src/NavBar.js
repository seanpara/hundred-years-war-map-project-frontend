import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  return (

    <div>
        <NavLink to="/1399">
          <h1>1399</h1>
        </NavLink>
        <NavLink to="/1429">
          <h1>1429</h1>
        </NavLink>
    </div>

  );
}

export default NavBar
