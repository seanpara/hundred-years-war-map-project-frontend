import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"
import MapContainer from "./MapContainer"

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
      <>
      {this.state.mapData === [] && this.state.mapDecriptions[0] === undefined?  null :
        <MapContainer
          mapData= {this.state.mapData}
          mapDescription= {this.state.mapDecriptions[0]}
        />}
      </>
    );
  }
}

export default App;
