import actionTypes from '../actions/constants';
import { SORT_TYPES } from './reducersConstans';

const initialState = {
  searchedVehicles: [],
  activatedFilters: {
    sort: SORT_TYPES.EMPTY,
    gears: [],
    engines: [],
    brands: [],
    types: [],
    number_of_seats: [],
    minPrice: 0,
    maxPrice: 0,
  },
};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_VEHICLES_SUCCESS: {
      const { searchData } = action;
      const values = Object.values(searchData);
      const prices = values.map((vehicle) => parseInt(vehicle.price_per_day));
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      return {
        ...state,
        searchedVehicles: values,
        activatedFilters: {
          minPrice: minPrice,
          maxPrice: maxPrice,
          sort: SORT_TYPES.EMPTY,
          gears: [],
          engines: [],
          brands: [],
          types: [],
          number_of_seats: [],
        },
      };
    }
    case actionTypes.SET_SORT_LTH: {
      const activatedFilters = state.activatedFilters;
      return {
        ...state,
        activatedFilters: {
          ...activatedFilters,
          sort: SORT_TYPES.LOWER_TO_HIGHER,
        },
      };
    }
    case actionTypes.SET_SORT_HTL: {
      const activatedFilters = state.activatedFilters;
      return {
        ...state,
        activatedFilters: {
          ...activatedFilters,
          sort: SORT_TYPES.HIGHER_TO_LOWER,
        },
      };
    }
    case actionTypes.SET_PRICE_RANG: {
      const { range } = action;
      const activatedFilters = state.activatedFilters;
      return {
        ...state,
        activatedFilters: {
          ...activatedFilters,
          minPrice: range[0],
          maxPrice: range[1],
        },
      };
    }
    case actionTypes.SET_FILTERS: {
      const { gears, brands, types, number_of_seats, engines } = action;
      const activatedFilters = state.activatedFilters;
      return {
        ...state,
        activatedFilters: {
          ...activatedFilters,
          gears,
          brands,
          types,
          number_of_seats,
          engines,
        },
      };
    }
    default:
      return state;
  }
};

export default searchReducers;
