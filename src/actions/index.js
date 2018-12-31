import axios from 'axios'

export const addMapDataToState = () => async dispatch => {

  const response = await axios.get("http://localhost:3000/api/v1/maps")
  console.log(response)

  // dispatch({type: "ADD_MAP_DATA", payload: response.data})
}

const addHistoricalEventToMap = (historicalEventObj) => {
  return {
    type: "ADD_HISTORICAL_EVENT_TO_MAP",
    payload: historicalEventObj
  }
}

const selectMap = (mapObj) => {
  return {
    type: "SELECT_MAP",
    payload: mapObj
  }
}
