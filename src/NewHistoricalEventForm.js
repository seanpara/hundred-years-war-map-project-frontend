import React, { Component } from 'react';


export default class NewHistoricalEventForm extends Component {

  state = {
    title: "",
    description:"",
    latitude: '',
    longitude: '',
    selectedFile: null
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // console.log(this)
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
    delete historicalEventData["selectedFile"]

    formUpload.append("historical event", JSON.stringify(historicalEventData))
    fetch("http://localhost:3000/api/v1/historical_events", {
      method: "POST",
      body: formUpload
    })
    .then(r => r.json())
    .then(r => console.log(r))
  }

  render() {
    return (
      <div className="historical-event-form">
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </label>
          <label>Description
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <label>Latitude
            <input
              name="latitude"
              type="number"
              value={this.state.latitude}
              onChange={this.handleInputChange}
            />
          </label>
          <label>Longitude
            <input
              name="longitude"
              type="number"
              value={this.state.longitude}
              onChange={this.handleInputChange}
            />
          </label>
          <label>Image File
            <input
              type="file"
              id="file-input"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}
