import actionTypes from '../actions/constants';

const initialState = {
  searchTerm: null,
};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH: {
      const { term } = action;
      return { ...state, searchTerm: term };
    }

    default:
      return state;
  }
};

export default searchReducers;
