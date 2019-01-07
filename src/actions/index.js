import axios from 'axios'

export const addMapDataToState = () => async dispatch => {

  const response = await axios.get("http://localhost:3000/api/v1/maps")
  // console.log(response.data)

  dispatch({type: "ADD_MAP_DATA", payload: response.data})
  dispatch(selectMap(response.data[1]))
}

export const addHistoricalEventToMap = (historicalEventObj) => {
  console.log(historicalEventObj)
  return {
    type: "ADD_HISTORICAL_EVENT_TO_MAP",
    payload: historicalEventObj
  }
}

export const selectMap = (mapObj) => {
  // console.log(mapObj)
  return {
    type: "SELECT_MAP",
    payload: mapObj
  }
}
