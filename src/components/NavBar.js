import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'

import { selectMap } from "../actions"


const NavBar = (props) => {

  console.log(props)
  const renderNavLinks = () => {

    const mapYears = props.mapData.map(mapBoxMap => mapBoxMap.year)

    return mapYears.map((year) => {
      return (
          <div key={year} className="nav-item">
            <NavLink to={`${year}`} onClick={() => changeMap(year)}>
              <p className="nav-item-text">{year}</p>
            </NavLink>
          </div>
        )
      })
  }// end of renderNavLinks

  const changeMap = (year) => {
    const mapObj = props.mapData.find(map => map.year === year)
    props.selectMap(mapObj)

  }

  return (

    <div className="navbar">
      <div >
          <img className="coat-of-arms" src="https://www.fleurdelis.com/images/edwardiii.png"></img>
      </div>
      <div className="nav-item">
        <NavLink to="/" onClick={() => changeMap(1429)}>
          <p className="nav-item-text">Home</p>
        </NavLink>
      </div>
      {renderNavLinks()}

    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    mapData: state.mapData
  }
}

export default connect(mapStateToProps, { selectMap })(NavBar)
