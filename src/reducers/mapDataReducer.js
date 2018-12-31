export default (state = [], action) => {
  switch (action.type) {
    case "ADD_MAP_DATA":
      return action.payload
    case "ADD_HISTORICAL_EVENT_TO_MAP":
      return state.map((mapBoxMap) => {
        if (mapBoxMap.id === action.payload.map_id){
          const newMapBox = {...mapBoxMap}
          newMapBox.historical_events = [...mapBoxMap.historical_events, action.payload]
          return newMapBox
        }
        else {
          return mapBoxMap
        }
      })
    default:
      return state
  }
}
