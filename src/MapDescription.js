import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MapDescription extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    console.log(this.props.description);
    return (
      <div>
      {this.props.description === "Placeholder description" ? "This will be a description soon" : this.props.description.text }
      </div>
    );
  }

}

export default MapDescription;
