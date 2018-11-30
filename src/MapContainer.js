import React, { Component } from 'react';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"
import HistoryEventDescription from "./HistoryEventDescription.js"
import NewHistoricalEventForm from "./NewHistoricalEventForm"


class MapContainer extends Component {
  state = {
    showEventDescription: false,
    historyEventDescriptionText: ""
  }

  renderEventDescription = (descriptionText) => {
    this.setState({showEventDescription: true, historyEventDescriptionText: descriptionText})
  }

  removeEventDescription = () => {
    this.setState({showEventDescription: false, historyEventDescriptionText: "" })
  }
  render() {
    return (
      <div className="map-container">
        <Map renderEventDescription={this.renderEventDescription} removeEventDescription={this.removeEventDescription}
        mapData={ this.props.mapData} />
        <MapDescription mapDescription={this.props.mapDescription}/>
        {this.state.showEventDescription ? <HistoryEventDescription text={this.state.historyEventDescriptionText}/> : null}
        {this.props.mapData === undefined ? null :<NewHistoricalEventForm mapId = {this.props.mapData.id} />}

      </div>
    );
  }

}

export default MapContainer;
