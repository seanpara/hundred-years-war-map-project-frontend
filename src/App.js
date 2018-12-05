import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from "./Map.js"
import MapDescription from "./MapDescription.js"
import MapContainer from "./MapContainer"
import NavBar from "./NavBar"
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  state = {
    mapData: [],
    mapDecriptions: []
  }

  getMapData = () => {
    fetch("http://localhost:3000/api/v1/maps")
    .then(r => r.json())
    .then( (mapRes) => {
      this.setState((state) => {
        return {mapData: mapRes}
      })
    })
  }

  getMapDescriptions = () => {
    fetch("http://localhost:3000/api/v1/map_descriptions")
    .then(r => r.json())
    .then( (descriptionRes) => {
      this.setState((state) => {
        return {mapDecriptions: descriptionRes}
      })
    })
  }

  addHistoricalEventToMapDataState = (historicalEventObj) => {
    // console.log("H event is", historicalEventObj)
    // console.log("Old state is", this.state)
    this.setState((state) => {
      return {
        mapData: state.mapData.map((mapBoxMap) => {
          if (mapBoxMap.id === historicalEventObj.map_id){
            const newMapBox = {...mapBoxMap}
            newMapBox.historical_events = [...mapBoxMap.historical_events, historicalEventObj]
            return newMapBox
          }
          else {
            return mapBoxMap
          }
        })
      }
    })
  }

  componentDidMount(){
    this.getMapData()
    this.getMapDescriptions()
  }

  mapBasedOnURL = (mapUrl) => {
    const mapYearNum = parseInt(mapUrl)
    const chosenMap = this.state.mapData.find((reactMap) => {
      return reactMap.year === mapYearNum
    })
    return chosenMap
  }

//   mapDescriptionBasedOnURL = (mapUrl) => {
//     const mapYearNum = parseInt(mapUrl)
//     const chosenMap = this.state.mapData.find((reactMap) => {
//       return reactMap.year === mapYearNum
//     })
//
//     if (chosenMap === undefined) {
//
//     } else {
//       console.log(chosenMap.id)
//     } // const mapId = chosenMap.id
//
// }

  render() {

    return (

      <Router>
        <div className="App">
          <NavBar mapData={this.state.mapData}/>
          <Route
            path="/:mapYear"
            render={(props) => {
            // this.mapData === undefined ? "description text soon" : this.mapBasedOnURL(props.match.params.mapYear).map_descriptions[0]

              return <MapContainer {...props}
                mapData={this.mapBasedOnURL(props.match.params.mapYear)}
                mapDescription={
                  this.mapBasedOnURL(props.match.params.mapYear) === undefined ? "description text soon" : this.mapBasedOnURL(props.match.params.mapYear).map_descriptions[0].text
                }

                addHistoricalEventToMapDataState={this.addHistoricalEventToMapDataState}
                />
            } }
          />
        </div>
      </Router>


    );
  }
}

export default App;
