import React, { Component } from 'react';


export default class NewHistoricalEventForm extends Component {

  state = {
    title: "",
    description: "",
    year: "",
    latitude: this.props.clickedLatitude,
    longitude: this.props.clickedLongitude
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const historicalEventImage = event.target.querySelector('#file-input').files[0]
    let formUpload = new FormData()
    formUpload.append("image", historicalEventImage)
    let historicalEventData = {...this.state}
    historicalEventData = {...historicalEventData, map_id: this.props.mapId}
    formUpload.append("historical_event", JSON.stringify(historicalEventData))
    fetch("http://localhost:3000/api/v1/historical_events", {
      method: "POST",
      body: formUpload
    })
    .then(r => r.json())
    .then((historicalEventRes) => {
      this.setState({
        title: "",
        description: "",
        year: "",
        latitude: '',
        longitude: ''
      },
      this.props.addHistoricalEventToMapDataState(historicalEventRes))

    })
  }// end of hanldeSubmit

  componentDidUpdate(prevProps, prevState){
    if (prevProps.clickedLatitude !== this.props.clickedLatitude && prevProps.clickedLongitude !== this.props.clickedLongitude ){
      this.setState({latitude: this.props.clickedLatitude, longitude: this.props.clickedLongitude})
    }
  }

  render() {
    return (
      <div className="historical-event-form-container">
        <form className="historical-event-form"
        onSubmit={this.handleSubmit}>
          <div className="historical-event-form-item">
            <label className="form-label">Title
              <input
                className="form-input"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="historical-event-form-item">
            <label className="form-label">Description
              <input
                className="form-input"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="historical-event-form-item">
            <label className="form-label">Year
              <input
                className="form-input"
                name="year"
                type="number"
                value={this.state.year}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="historical-event-form-item">
            <label className="form-label">Latitude
              <input
                className="form-input"
                name="latitude"
                type="number"
                step="0.0001"
                value={this.state.latitude}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="historical-event-form-item">
            <label className="form-label">Longitude
              <input
                className="form-input"
                name="longitude"
                type="number"
                step="0.0001"
                value={this.state.longitude}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div className="historical-event-form-item">
            <label className="form-label">Image File
              <input
                className="form-input"
                type="file"
                id="file-input"
              />
            </label>
          </div>
          <input
            className="submit-button"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }

}
