import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"
import { BrowserRouter as Router, Route } from 'react-router-dom';



class MapContainer extends Component {

  render() {
    console.log(this.props);
    return (
      <>
        <Map
        mapData={this.props.mapData === [] ? null : this.props.mapData}
        />

      </>
    );
  }

}

export default MapContainer;


<MapContainer
mapDescription={this.props.mapDecriptions === undefined ? "Placeholder description" :
this.props.mapDecriptions[0]}
/>
