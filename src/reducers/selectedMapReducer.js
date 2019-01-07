export default (state = {}, action ) => {
  switch (action.type) {
    case "SELECT_MAP":
      return action.payload
    case "ADD_HISTORICAL_EVENT_TO_MAP":
        if (state.id === action.payload.map_id){
          const newMapBox = {...state}
          newMapBox.historical_events = [...state.historical_events, action.payload]
          return newMapBox
        }
        else {
          return state
        }
    default:
      return state
  }
}
