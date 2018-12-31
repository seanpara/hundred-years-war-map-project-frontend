import {combineReducers} from 'redux'
import mapDataReducer from "./mapDataReducer.js"
import selectedMapReducer from "./selectedMapReducer.js"

export default combineReducers({
  mapData: mapDataReducer,
  selectedMap: selectedMapReducer
})
