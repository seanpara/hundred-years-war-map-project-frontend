import React, {Component} from 'react';
// import MapGL, {NavigationControl} from 'react-map-gl';
import ReactMapGL, {MapController} from 'react-map-gl';


const TOKEN = 'pk.eyJ1Ijoic2Vhbi1wYXJhIiwiYSI6ImNqb29lcG50YzBibjMzcGwxMjZibnd3ZnMifQ.DTE1NiDPv4hV7N8xT3xnZA';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       viewport: {
  //         latitude: 50,
  //         longitude: -3,
  //         zoom: 3,
  //         bearing: 0,
  //         pitch: 0,
  //         width: 500,
  //         height: 500,
  //       }
  //     };
  //   }
  //
  // handleViewPortChange = (viewport) => {
  //   const {width, height, latitude, longitude, zoom} = viewport;
  //   this.setState((state) => {
  //     return {width, height, latitude, longitude, zoom}
  //   })
  // }


  render() {
      return (
        <>
        <ReactMapGL
           width={400}
           height={400}
           latitude={50}
           longitude={-3}
           zoom={3.5}
           onViewStateChange={(viewport) => {
           const {width, height, latitude, longitude, zoom} = viewport;
           // call `setState` and use the state to update the map.
          }}
          mapStyle="mapbox://styles/sean-para/cjooeq11s245t2spc490zj65f"
          mapboxApiAccessToken={TOKEN}/>
          </>
      );
    }
}// end of map compoent
