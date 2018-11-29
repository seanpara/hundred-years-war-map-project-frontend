import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  return (

    <div className="navbar">
      <div className="nav-item">
        <NavLink to="/1429">
            <h1>1429</h1>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/1399">
            <h1>1399</h1>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
      </div>
    </div>

  );
}

export default NavBar
