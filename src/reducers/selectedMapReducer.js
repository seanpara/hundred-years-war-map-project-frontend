export default (state = {}, action ) => {
  switch (action.type) {
    case "SELECT_MAP":
      return action.payload
    default:
      return state
  }
}
