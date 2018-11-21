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
  constructor(props) {
      super(props);
      this.state = {
        viewport: {
          viewState:{
            latitude: 50,
            longitude: -3,
            zoom: 3.5,
            // bearing: 0,
            // pitch: 0,
            width: 400,
            height: 400
          }
        }
      };
    }
  //
  // handleViewPortChange = (viewport) => {
  //   const {width, height, latitude, longitude, zoom} = viewport;
  //   this.setState((state) => {
  //     return {width, height, latitude, longitude, zoom}
  //   })
  // }

  render() {
    const {state:{viewport: {viewState}}} = this
    console.log("View state is",viewState )
      return (
        <ReactMapGL
           onViewStateChange={(viewport) => {
             console.log("Running")
             console.log("Viewport is ", viewport)
           const {width, height, latitude, longitude, zoom} = viewport;
           this.setState({viewport})
          }}
          mapStyle="mapbox://styles/sean-para/cjooeq11s245t2spc490zj65f"
          mapboxApiAccessToken={TOKEN} {...viewState}/>
      );
    }
}// end of map compoent
