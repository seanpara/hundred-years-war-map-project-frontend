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
    mapDecriptions: [],
    historicalEvents: []
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

  getMapDescriptions = () => {
    fetch("http://localhost:3000/api/v1/map_descriptions")
    .then(r => r.json())
    .then( (descriptionRes) => {
      this.setState((state) => {
        return {mapDecriptions: descriptionRes}
      })
    })
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
              /> }
          />
          <Route
            exact path="/1399"
            render={(props) => <MapContainer {...props}
              mapData={this.state.mapData[0]}
              mapDescription={this.state.mapData[0].map_descriptions[0]}
              /> }
          />
          <Route
            exact path="/1429"
            render={(props) => <MapContainer {...props}
              mapData={this.state.mapData[1]}
              mapDescription={this.state.mapData[1].map_descriptions[0]}
              /> }
          />
        </div>
      </Router>


    );
  }
}

export default App;
