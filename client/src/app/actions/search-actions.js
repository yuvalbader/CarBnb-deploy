import actionTypes from "./constants"

const searchAction = (where, from, until, timeToPick, timeToDrop) => {
  return {
    type: actionTypes.SEARCH,
    where,
    from,
    until,
    timeToPick,
    timeToDrop,
  }
}

export const search = (where, from, until, timeToPick, timeToDrop) => {
  return (dispatch) => {
    dispatch(searchAction(where, from, until, timeToPick, timeToDrop))
  }
}
