import React, {Component} from 'react';
import Pin from "./Pin.js"
import PopUpInfo from "./PopUpInfo.js"
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';


const TOKEN = 'pk.eyJ1Ijoic2Vhbi1wYXJhIiwiYSI6ImNqb29lcG50YzBibjMzcGwxMjZibnd3ZnMifQ.DTE1NiDPv4hV7N8xT3xnZA';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class Map extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewport: {
            latitude: 49.5,
            longitude: -1.25,
            zoom: 4.7,
            bearing: 0,
            pitch: 0,
            width: 700,
            height: 900
        },
        popupInfo: null
      };
    }// end of constructor

  updateViewport = (viewport) => {
    this.setState({viewport});
  }


  renderMarkers = () => {
    return this.props.mapData.historical_events.map((historicalEvent) => {
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
    // console.log(historicalEvent)
    this.setState({popupInfo: historicalEvent },() => this.props.renderEventDescription(historicalEvent.description))

  }

  renderPopup = () => {
    const {popupInfo} = this.state;
    // console.log(popupInfo);
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

  render() {
    // this.props.mapData === undefined ? console.log("map data isn't here") : console.log(this.props.mapData.historical_events)
    const {viewport} = this.state
    // console.log("View state is",viewState )
      return (
        <div >
          <MapGL
            {...viewport}
            onViewportChange={this.updateViewport}
            className="react-mapbox"
            mapStyle={ this.props.mapData === undefined ?
              "mapbox://styles/sean-para/cjooeq11s245t2spc490zj65f" : this.props.mapData.url
            }
            mapboxApiAccessToken={TOKEN}
             >
            {this.props.mapData === undefined ? null : this.renderMarkers()}
            {this.renderPopup()}
            <div className="nav" style={navStyle}>
             <NavigationControl onViewportChange={this.updateViewport} />
           </div>

          </MapGL>
          </div>
      );
    }
}// end of map compoent
