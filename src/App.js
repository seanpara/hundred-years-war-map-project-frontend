import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"
import MapContainer from "./MapContainer"
import NavBar from "./NavBar"
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  state = {
    mapData: []
  }

  getMapData = () => {
    fetch("http://localhost:3000/api/v1/maps")
    .then(r => r.json())
    .then( (mapRes) => {
      this.setState((state) => {
        return {mapData: mapRes}
      })
    })
  }

  componentDidMount(){
    this.getMapData()
  }

  addHistoricalEventToMapDataState = (historicalEventObj) => {
    this.setState((state) => {
      return {
        mapData: state.mapData.map((mapBoxMap) => {
          if (mapBoxMap.id === historicalEventObj.map_id){
            const newMapBox = {...mapBoxMap}
            newMapBox.historical_events = [...mapBoxMap.historical_events, historicalEventObj]
            return newMapBox
          }
          else {
            return mapBoxMap
          }
        })
      }
    })
  }

  mapBasedOnURL = (mapUrl) => {
    // console.log(mapUrl)
    const mapYearNum = parseInt(mapUrl)
    const chosenMap = this.state.mapData.find((reactMap) => {
      return reactMap.year === mapYearNum
    })
    return chosenMap
  }

  render() {
    // console.log(this.state.mapData)
    return (
      <Router>
        <div className="App">
          <NavBar mapData={this.state.mapData}/>
          <Route
            exact path="/"
            render={(props) => {
              return <MapContainer {...props}
                mapData={this.mapBasedOnURL(1429)}
                mapDescription={
                  this.state.mapData.length === 0 ? "description text soon" : this.mapBasedOnURL(1429).map_descriptions[0].text}
                addHistoricalEventToMapDataState={this.addHistoricalEventToMapDataState}/>
            }}
          />
          <Route
            path="/:mapYear"
            render={(props) => {
              return <MapContainer {...props}
                mapData={this.mapBasedOnURL(props.match.params.mapYear)}
                mapDescription={
                  this.mapBasedOnURL(props.match.params.mapYear) === undefined ? "description text soon" : this.mapBasedOnURL(props.match.params.mapYear).map_descriptions[0].text}
                addHistoricalEventToMapDataState={this.addHistoricalEventToMapDataState}/>
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
