import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { addMapDataToState, selectMap } from "../actions"
import './App.css';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"
import MapContainer from "./MapContainer"
import NavBar from "./NavBar"

class App extends Component {

  componentDidMount(){
    this.props.addMapDataToState()
  }

  changeMap = (mapUrl) => {
    const mapYearNum = parseInt(mapUrl)
    const chosenMap = this.props.mapData.find((reactMap) => {
      return reactMap.year === mapYearNum
    })
    this.props.selectMap(chosenMap)
  }

  render() {
    if (this.props.mapData.length === 0) {
      return null
    }

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route
            exact path="/"
            render={() => {
              this.changeMap(1429)
              return <MapContainer />
            }}
          />
          <Route
            path="/:mapYear"
            render={(props) => {
              this.changeMap(props.match.params.mapYear)
              return <MapContainer/>
            }}
          />
        </div>
      </Router>
    );
  }// end of App render
}// end of App component

const mapStateToProps = (state) => {
  return {
    mapData: state.mapData,
    selectedMap: state.selectedMap
  }
}

export default connect(mapStateToProps, {addMapDataToState, selectMap})(App)
