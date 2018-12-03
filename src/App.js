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
    mapData: [],
    mapDecriptions: []
  }

  getMapData = () => {
    fetch("http://localhost:3000/api/v1/maps")
    .then(r => r.json())
    .then( (mapRes) => {
      this.setState((state) => {
        return {mapData: mapRes}
      }, () => console.log(this.state.mapData))
    })
  }

  getMapDescriptions = () => {
    fetch("http://localhost:3000/api/v1/map_descriptions")
    .then(r => r.json())
    .then( (descriptionRes) => {
      this.setState((state) => {
        return {mapDecriptions: descriptionRes}
      })
    })
  }

  addHistoricalEventToMapDataState = (historicalEventObj) => {
    console.log(historicalEventObj)
    this.setState((state) => {
      mapData: this.state.mapData.map((mapBoxMap) => {
        if (mapBoxMap.id === historicalEventObj.map_id){
          return mapBoxMap.historical_events = [...mapBoxMap.historical_events, historicalEventObj]
        }
        else {
          return mapBoxMap
        }
      })
    }, () => console.log(this.state))
  }

  componentDidMount(){
    this.getMapData()
    this.getMapDescriptions()
  }

  render() {
    return (

      <Router>
        <div className="App">
          <NavBar/>
          <Route
            exact path="/"
            render={(props) => <MapContainer {...props}
              mapData={this.state.mapData[1]}
              mapDescription={this.state.mapDecriptions[1]}
              addHistoricalEventToMapDataState={this.addHistoricalEventToMapDataState}
              /> }
          />
          <Route
            exact path="/1399"
            render={(props) => <MapContainer {...props}
              mapData={this.state.mapData[0]}
              mapDescription={this.state.mapDecriptions[0]}
              addHistoricalEventToMapDataState={this.addHistoricalEventToMapDataState}
              /> }
          />
          <Route
            exact path="/1429"
            render={(props) => <MapContainer {...props}
              mapData={this.state.mapData[1]}
              mapDescription={this.state.mapDecriptions[1]}
              addHistoricalEventToMapDataState={this.addHistoricalEventToMapDataState}
              /> }
          />
        </div>
      </Router>


    );
  }
}

export default App;
