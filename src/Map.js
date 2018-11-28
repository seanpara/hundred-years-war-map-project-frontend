import React, {Component} from 'react';
// import EventPin from "./EventPin.js"
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';


const TOKEN = 'pk.eyJ1Ijoic2Vhbi1wYXJhIiwiYSI6ImNqb29lcG50YzBibjMzcGwxMjZibnd3ZnMifQ.DTE1NiDPv4hV7N8xT3xnZA';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const markerStyle = {
  fill: '#000000	',
  stroke: 'none'
};

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

export default class Map extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewport: {
            latitude: 50.4,
            longitude: -1.25,
            zoom: 4.4,
            bearing: 0,
            pitch: 0,
            width: 800,
            height: 800
        },
        popupInfo: null

      };
    }

  updateViewport = (viewport) => {
    this.setState({viewport});
  }

  handleMarkerClick = (event) => {
    this.setState({popupInfo: {longitude: 2.3522, latitude: 48.8566 }})
  }

  renderMarker = () => {
    return (
      <Marker
        longitude={2.3522}
        latitude= {48.8566} >
        <svg
        height={25}
        viewBox="0 0 24 24"
        style={{...markerStyle, transform: `translate(${-20 / 2}px,${-20}px)`}}
        onClick={this.handleMarkerClick}
      >
      <path d={ICON}/>
      </svg>
      </Marker>
    );
  }

  renderPopup = () => {
    const {popupInfo} = this.state;
    console.log("In renderPopup");
    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => this.setState({popupInfo: null})} >
        <div>
          This is a pop up !
        </div>
      </Popup>
    );
  }


  render() {
    const {viewport} = this.state
    // console.log("View state is",viewState )
      return (
        <MapGL
          {...viewport}
          onViewportChange={this.updateViewport}

          mapStyle={ this.props.mapData == undefined ?
            "mapbox://styles/sean-para/cjooeq11s245t2spc490zj65f" : this.props.mapData.url
          }
          mapboxApiAccessToken={TOKEN} >
          {this.renderMarker()}
          {this.renderPopup()}
          <div className="nav" style={navStyle}>
           <NavigationControl onViewportChange={this.updateViewport} />
         </div>

      </MapGL>

      );
    }
}// end of map compoent
