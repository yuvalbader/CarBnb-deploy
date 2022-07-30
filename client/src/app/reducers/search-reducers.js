import actionTypes from '../actions/constants';

const initialState = {
  searchedVehicles: [],
};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_VEHICLES_SUCCESS: {
      const { searchData } = action;
      const values = Object.values(searchData);
      return { ...state, searchedVehicles: values };
    }

    default:
      return state;
  }
};

export default searchReducers;
