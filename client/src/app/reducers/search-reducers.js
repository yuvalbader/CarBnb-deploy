import actionTypes from '../actions/constants';

const initialState = {
  searchedVehicles: [],
  priceLowToHigh: false,
  priceHighToLow: false,
  minPrice: 0,
  maxPrice: 0,
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
        minPrice: minPrice,
        maxPrice: maxPrice,
        priceLowToHigh: false,
        priceHighToLow: false,
      };
    }
    case actionTypes.SET_SORT_LTH: {
      /*       const sortedVehicles = [...state.filteredVehicles];
      sortedVehicles.sort( (v1,v2) => v1.price_per_day -v2.price_per_day); */
      return { ...state, priceLowToHigh: true, priceHighToLow: false };
    }
    case actionTypes.SET_SORT_HTL: {
      /*       const clonedVehicles = [...state.filteredVehicles];
      clonedVehicles.sort( (v1,v2) => v2.price_per_day -v1.price_per_day); */
      return { ...state, priceLowToHigh: false, priceHighToLow: true };
    }
    case actionTypes.SET_PRICE_RANGE: {
      const { range } = action;
      /*const clonedVehicles = [...state.filteredVehicles];
      clonedVehicles.filter( vehicle => vehicle.price_per_day >= range[0] && vehicle.price_per_day >= range[1]); */
      return { ...state, minPrice: range[0], maxPrice: range[1] };
    }
    default:
      return state;
  }
};

export default searchReducers;
