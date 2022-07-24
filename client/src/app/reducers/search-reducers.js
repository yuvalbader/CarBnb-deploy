import actionTypes from "../actions/constants"

const initialState = {
  where: null,
  from: null,
  until: null,
  timeToPick: null,
  timeToDrop: null,
}

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH: {
      const { where, from, until, timeToPick, timeToDrop } = action
      return {
        ...state,
        where: where,
        from: from,
        until: until,
        timeToPick: timeToPick,
        timeToDrop: timeToDrop,
      }
    }

    default:
      return state
  }
}

export default searchReducers
