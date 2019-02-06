import React, {Component} from 'react';
import Pin from "./Pin.js"
import PopUpInfo from "./PopUpInfo.js"
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux'

const TOKEN = 'pk.eyJ1Ijoic2Vhbi1wYXJhIiwiYSI6ImNqb29lcG50YzBibjMzcGwxMjZibnd3ZnMifQ.DTE1NiDPv4hV7N8xT3xnZA';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class Map extends Component {
  state = {
    viewport: {
        latitude: 49.5,
        longitude: -1.25,
        zoom: 3.5,
        bearing: 0,
        pitch: 0,
        width: 700,
        height: 900
    },
      popupInfo: null
  }// end of state construction

  updateViewport = (viewport) => {
    this.setState({viewport});
  }
  //
  componentDidUpdate(prevProps, prevState){
    if (prevProps.selectedMap.year !== this.props.selectedMap.year){
      this.setState({popupInfo: null})
      this.props.removeEventDescription()
    }
  }

  renderMarkers = () => {
    const {selectedMap} = this.props

    return selectedMap.historical_events.map((historicalEvent) => {
        return (
          <Marker
            key={historicalEvent.id}
            latitude={historicalEvent.latitude}
            longitude={historicalEvent.longitude}
          >
            <Pin handlePinClick={() => this.handlePinClick(historicalEvent)}/>
          </Marker>
      )
    })
  }

  handlePinClick = (historicalEvent) => {
    this.setState({popupInfo: historicalEvent },() => this.props.renderEventDescription(historicalEvent.description))

  }

  renderPopup = () => {
    const {popupInfo} = this.state;

    return popupInfo && (
      <Popup tipSize={3}
        anchor="top"
        latitude={popupInfo.latitude}
        longitude={popupInfo.longitude}
        onClose={() => this.setState({popupInfo: null}, () => this.props.removeEventDescription())} >
        <PopUpInfo popupInfo={popupInfo}/>
      </Popup>
    );
  }

  onClickMap = (event) => {
      const clickedLatitude = event.lngLat[1]
      const clickedLongitude = event.lngLat[0]
      this.props.sendClickedLatLngToForm(clickedLatitude, clickedLongitude)
      console.log(clickedLatitude, clickedLongitude)
    }

  render() {
    const {viewport} = this.state
    const {selectedMap} = this.props
    if (!selectedMap || !selectedMap.historical_events ){
      return null
    }
    return (
      <Fade big>
        <MapGL
          {...viewport}
          width="100%"
          height="350px"
          onViewportChange={this.updateViewport}
          mapStyle={selectedMap.url}
          onClick={this.onClickMap}
          mapboxApiAccessToken={TOKEN}
           >
          {this.renderMarkers()}
          {this.renderPopup()}
          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this.updateViewport} />
          </div>
        </MapGL>
      </Fade>
    )// end of render return
  }// end of Map render
}// end of map compoent

const mapStateToProps = (state) => {
  return {
    selectedMap: state.selectedMap
  }
}

export default connect(mapStateToProps)(Map)
