import React, { Component } from 'react';

const MapDescription = (props) => {

    return (
      <div className="map-description">
      {props.mapDescription === undefined ? "This will be a description soon" : props.mapDescription.text }
      </div>
    );

}

export default MapDescription;


//
