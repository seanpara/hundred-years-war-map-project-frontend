import React, { Component } from 'react';
import { connect } from 'react-redux'


const MapDescription = (props) => {
    if (!props.description){
      return null
    }
    else {
      return (
        <div className="map-description">
        { props.description[0].text }
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    description: state.selectedMap.map_descriptions
  }
}

export default connect(mapStateToProps)(MapDescription)


//
