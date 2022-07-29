import actionTypes from "./constants"

const searchAction = () => {
  return {
    type: actionTypes.SEARCH,
  }
}

export const search = (where, from, until, timeToPick, timeToDrop) => {
  return (dispatch) => {
    dispatch(searchAction(where, from, until, timeToPick, timeToDrop))
  }
}
