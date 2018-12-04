import React, { Component } from 'react';
import PropTypes from 'prop-types';


const HistoryEventDescription = (props) => {
    return (
        <div className="historical-event-description">
        {props.text}
        </div>
    )

}

export default HistoryEventDescription;
