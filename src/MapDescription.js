import React, { Component } from 'react';

const MapDescription = (props) => {
    console.log(props);
    return (
      <div className="map-description">
      {props.mapDescription === undefined ? "This will be a description soon" : props.mapDescription }
      </div>
    );

}

export default MapDescription;


//
