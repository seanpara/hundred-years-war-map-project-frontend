import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"


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
      }, () => console.log(this.state.mapDecriptions))
    })
  }

  componentDidMount(){
    this.getMapData()
    this.getMapDescriptions()
  }

  render() {
    return (
      <>
        <Map mapData={this.state.mapData === [] ? null: this.state.mapData}/>
        <MapDescription description={this.state.mapDecriptions[0] === undefined ? "Placeholder description" :
        this.state.mapDecriptions[0] }/>
      </>
    );
  }
}

export default App;
