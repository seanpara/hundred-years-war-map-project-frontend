import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addHistoricalEventToMap } from "../actions"

class NewHistoricalEventForm extends Component {

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
    if (!this.validate()) {
      window.alert("Please enter valid information into all form fields")
      return
    }
    const historicalEventImage = event.target.querySelector('#file-input').files[0]
    let formUpload = new FormData()
    formUpload.append("image", historicalEventImage)
    let historicalEventData = {...this.state}
    historicalEventData = {...historicalEventData, map_id: this.props.selectedMap.id}
    formUpload.append("historical_event", JSON.stringify(historicalEventData))
    event.target.reset()
    fetch("https://young-atoll-53269.herokuapp.com/api/v1/historical_events", {
      method: "POST",
      body: formUpload
    })
    .then(r => {
      let res = r.json()
      return res
    })
    .then((historicalEventRes) => {
      console.log("historical event res obj is:", historicalEventRes)
      this.setState({
        title: "",
        description: "",
        year: "",
        latitude: '',
        longitude: ''
      })
      this.props.addHistoricalEventToMap(historicalEventRes)
      // this is where the ADD_EVENT_TO_MAP action should be dispatched
    })
  }// end of hanldeSubmit

  componentDidUpdate(prevProps, prevState){
    if (prevProps.clickedLatitude !== this.props.clickedLatitude && prevProps.clickedLongitude !== this.props.clickedLongitude ){
      this.setState({latitude: this.props.clickedLatitude, longitude: this.props.clickedLongitude})
    }
  }

  validate = () => {
    const file = document.querySelector('#file-input').files[0]
    if (this.state.title === '' || this.state.description === '' || this.state.description === '' || !file) {
      return false
    }
    else if (typeof this.state.latitude !== "number" && typeof this.state.longitude !== "number" ) {
      return false
    }
    else {
      return true
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

}// end of event form component

const mapStateToProps = (state) => {
  return {
    selectedMap: state.selectedMap
  }
}

export default connect(mapStateToProps, { addHistoricalEventToMap })(NewHistoricalEventForm)
