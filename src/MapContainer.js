import React, { Component } from 'react';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"

class MapContainer extends Component {

  render() {
    console.log(this.props);
    return (
      <>
        <Map mapData={ this.props.mapData} />
        <MapDescription mapDescription={this.props.mapDescription}/>
      </>
    );
  }

}

export default MapContainer;
