import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MapDescription extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log(this.props.mapDescription);
    return (
      <div>
      {this.props.mapDescription === undefined ? "This will be a description soon" : this.props.mapDescription.text }
      </div>
    );
  }

}

export default MapDescription;


//
