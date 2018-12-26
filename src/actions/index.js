const addMapDataToState = (mapData) => {
  return {
    type: "ADD_MAP_DATA",
    payload: mapData
  }
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
// const createPolicy = (name, amount) => {
//   return {
//     type: "CREATE_POLICY",
//     payload: {
//       name: name,
//       amount: amount
//     }
//   }
// }
//
// const deletePolicy = (name) => {
//   return {
//     type: "DELETE_POLICY",
//     payload: {
//       name: name
//     }
//   }
// }
//
// const createClaim = (name, amountOfMoneyToCollect) => {
//   return {
//     type: "CREATE_CLAIM",
//     payload: {
//       name: name,
//       amountOfMoneyToCollect: amountOfMoneyToCollect
//     }
//   }
// }
