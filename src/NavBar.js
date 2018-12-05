import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  // console.log(props)
  const renderNavLinks = () => {
    const mapYears = props.mapData.map(mapBoxMap => mapBoxMap.year)
    console.log(mapYears)

    return mapYears.map((year) => {
      return (
          <div key={year} className="nav-item">
            <NavLink to={`${year}`}>
              <p className="nav-item-text">{year}</p>
            </NavLink>
          </div>
        )
      })
    }
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
      {renderNavLinks()}

    </div>

  );
}

export default NavBar
