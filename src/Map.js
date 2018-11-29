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

  handlePinClick = (event) => {
    this.setState({popupInfo: {longitude: 2.3522, latitude: 48.8566 }})
    this.props.renderEventDescription("This is a description of a dope historical event")
  }

  renderMarker = (longitude, latitude) => {
    return (
      <Marker
        longitude={longitude}
        latitude={latitude}>
        <Pin handlePinClick={this.handlePinClick}/>
      </Marker>
    );
  }

  renderPopup = () => {
    const {popupInfo} = this.state;
    return popupInfo && (
      <Popup tipSize={3}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => this.setState({popupInfo: null}, () => this.props.removeEventDescription())} >
        <PopUpInfo name={"Agincourt"} wiki_url={`https://en.wikipedia.org/wiki/Battle_of_Agincourt`}
        img_url={`https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Schlacht_von_Azincourt.jpg/300px-Schlacht_von_Azincourt.jpg`}
        />
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
          mapboxApiAccessToken={TOKEN}
           >
          {this.renderMarker(2.3522, 48.8566)}
          {this.renderPopup()}
          <div className="nav" style={navStyle}>
           <NavigationControl onViewportChange={this.updateViewport} />
         </div>

      </MapGL>

      );
    }
}// end of map compoent
