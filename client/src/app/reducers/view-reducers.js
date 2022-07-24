import actionTypes from '../actions/constants';

const initialState = {
  isLoading: false,
  isErorr: false,
};

const viewReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLES_REQUEST:
    case actionTypes.REMOVE_VEHICLE_REQUEST:
    case actionTypes.ADD_VEHICLE_REQUEST: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default viewReducers;
