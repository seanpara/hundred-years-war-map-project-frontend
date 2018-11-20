import React, {Component} from 'react';
// import MapGL, {NavigationControl} from 'react-map-gl';
import ReactMapGL from 'react-map-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import DrawControl from 'react-mapbox-gl-draw';


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
          latitude: 50,
          longitude: -3,
          zoom: 4,
          bearing: 0,
          pitch: 0,
          width: 500,
          height: 500,
        }
      };
    }


  render() {
      const {viewport} = this.state;
      return (
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/sean-para/cjooeq11s245t2spc490zj65f"
          mapboxApiAccessToken={TOKEN}>
        </ReactMapGL>
      );
    }
}// end of map compoent


// <div className="nav" style={navStyle} >
//   <NavigationControl/>
// </div>
