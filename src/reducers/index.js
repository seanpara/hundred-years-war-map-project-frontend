const mapDataReducer = (mapData = [], action) => {
  switch (action.type) {
    case "ADD_MAP_DATA":
      return mapData = action.payload
    case "ADD_HISTORICAL_EVENT_TO_MAP"
      return mapData: state.mapData.map((mapBoxMap) => {
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
      return mapData
  }
}

const selectedMapReducer = (selectedMap = {}, action ) => {
  switch (ation.type) {
    case "SELECT_MAP"
      return action.payload
    case "ADD_HISTORICAL_EVENT_TO_MAP"
      return
      // rewrite event event fn to work with this 
  }
}


// const claimsHistory = (oldListOfClaims = [], action) => {
//   if (action.type === "CREATE_CLAIM"){
//     // care about action
//     return [...oldListOfClaims, action.payload]
//   }
//   // don't care about action
//   return oldListOfClaims
// }
//
// const accounting = (bagOfMoney = 100, action) => {
//   if (action.type === "CREATE_CLAIM" ) {
//     return bagOfMoney - action.payload.amountOfMoneyToCollect
//   }
//   else if (action.type === "CREATE_POLICY" ){
//     return bagOfMoney + action.payload.amount
//   }
//
//   return bagOfMoney
// }
//
// const policies = (listOfPolicies = [], action ) => {
//   if (action.type === "CREATE_POLICY"){
//     // care about action
//     return [...listOfPolicies, action.payload.name]
//   }
//   else if (action.type === "DELETE_POLICY"){
//     return listOfPolicies.filter(name => name !== action.payload.name)
//   }
//
//   return listOfPolicies
// }
//
// const {createStore, combineReducers } = Redux
//
// const ourDepartments = combineReducers({
//   accounting: accounting,
//   claimsHistory: claimsHistory,
//   policies: policies
// })
//
// const store = createStore(ourDepartments)
//
// // policies
// store.dispatch(createPolicy("Alex", 20))
// store.dispatch(createPolicy("Jim", 30))
// store.dispatch(createPolicy("Bob", 40))
// // claims
// store.dispatch(createClaim("Alex", 120))
// store.dispatch(createClaim("Jim", 50))
// // delete policy
// store.dispatch(deletePolicy("Bob"))
//
// console.log(store.getState())
