import React, { Component } from 'react';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"
import { BrowserRouter as Router, Route } from 'react-router-dom';

class MapContainer extends Component {

  render() {
    return (
      <>
        <Map mapData={ this.props.mapData} />
        <MapDescription mapDescription={this.props.mapDescription}/>
      </>
    );
  }

}

export default MapContainer;
