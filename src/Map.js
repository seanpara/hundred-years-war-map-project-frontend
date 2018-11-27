import React, {Component} from 'react';
// import MapGL, {NavigationControl} from 'react-map-gl';
import ReactMapGL from 'react-map-gl';


const TOKEN = 'pk.eyJ1Ijoic2Vhbi1wYXJhIiwiYSI6ImNqb29lcG50YzBibjMzcGwxMjZibnd3ZnMifQ.DTE1NiDPv4hV7N8xT3xnZA';

export default class Map extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewport: {
          viewState:{
            latitude: 50.4,
            longitude: -1.25,
            zoom: 4.4,
            // bearing: 0,
            // pitch: 0,
            width: 800,
            height: 800
          }
        }
      };
    }


  render() {
    const {state:{viewport: {viewState}}} = this
    console.log("View state is",viewState )
      return (
        <ReactMapGL
          {...viewState}
           onViewStateChange={(viewport) => {
             // console.log("Viewport is ", viewport)
           const {width, height, latitude, longitude, zoom} = viewport;
           this.setState({viewport})
          }}
          mapStyle={ this.props.mapData == undefined ?
            "mapbox://styles/sean-para/cjooeq11s245t2spc490zj65f" : this.props.mapData.url
          }
          mapboxApiAccessToken={TOKEN} />
      );
    }
}// end of map compoent
