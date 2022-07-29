import actionTypes from '../actions/constants';

const initialState = {};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_VEHICLES_SUCCESS: {
      const { searchResult } = action;
      return { ...searchResult };
    }

    default:
      return state;
  }
};

export default searchReducers;
