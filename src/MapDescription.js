import React, { Component } from 'react';

class MapDescription extends Component {

  render() {
    return (
      <div>
      {this.props.mapDescription === undefined ? "This will be a description soon" : this.props.mapDescription.text }
      </div>
    );
  }

}

export default MapDescription;


//
