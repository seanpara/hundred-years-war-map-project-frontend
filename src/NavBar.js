import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  return (

    <div className="navbar">
      <div className="coat-of-arms">
          <img src="https://www.fleurdelis.com/images/edwardiii.png"></img>
      </div>
      <div className="nav-item">
        <NavLink to="/">
          <p className="nav-item-text">Home</p>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/1429">
            <p className="nav-item-text" >1429</p>
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink to="/1399">
            <p className="nav-item-text" >1399</p>
        </NavLink>
      </div>

    </div>

  );
}

export default NavBar
