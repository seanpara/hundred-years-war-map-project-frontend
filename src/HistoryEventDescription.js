import React, { Component } from 'react';
import PropTypes from 'prop-types';


class HistoryEventDescription extends Component {

  render() {
    return (
      <div>{this.props.text}</div>
    );
  }

}

export default HistoryEventDescription;
