import React, {Component} from 'react';
// import MapGL, {NavigationControl} from 'react-map-gl';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';


const TOKEN = 'pk.eyJ1Ijoic2Vhbi1wYXJhIiwiYSI6ImNqb29lcG50YzBibjMzcGwxMjZibnd3ZnMifQ.DTE1NiDPv4hV7N8xT3xnZA';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const markerStyle = {
  fill: '#d00',
  stroke: 'none'
};


export default class Map extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewport: {
            latitude: 50.4,
            longitude: -1.25,
            zoom: 4.4,
            // bearing: 0,
            // pitch: 0,
            width: 800,
            height: 800
        }
      };
    }

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }



  render() {
    const {viewport} = this.state
    // console.log("View state is",viewState )
      return (
        <MapGL
          {...viewport}
          onViewportChange={this._updateViewport}

          mapStyle={ this.props.mapData == undefined ?
            "mapbox://styles/sean-para/cjooeq11s245t2spc490zj65f" : this.props.mapData.url
          }
          mapboxApiAccessToken={TOKEN} >
          <div className="nav" style={navStyle}>
           <NavigationControl onViewportChange={this._updateViewport} />
         </div>

      </MapGL>

      );
    }
}// end of map compoent
