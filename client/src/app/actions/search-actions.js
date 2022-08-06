import actionTypes from './constants';
import ListApiService from '../../services/list-api-service';

const searchRequestAction = () => ({
  type: actionTypes.SEARCH_VEHICLES_REQUEST,
});

const searchSuccessAction = (searchData) => ({
  type: actionTypes.SEARCH_VEHICLES_SUCCESS,
  searchData,
});

const searchFailureAction = () => ({
  type: actionTypes.SEARCH_VEHICLES_FAILURE,
});

const setSortHTLAction = () => ({
  type: actionTypes.SET_SORT_HTL,
});

const setSortLTHAction = () => ({
  type: actionTypes.SET_SORT_LTH,
});

const setPriceRangeAction = (range) => ({
  type: actionTypes.SET_PRICE_RANG,
  range,
});

const setFiltersAction = (gears, brands, types, number_of_seats, engines) => ({
  type: actionTypes.SET_FILTERS,
  gears,
  brands,
  types,
  number_of_seats,
  engines,
});

export const search = (searchData) => {
  return async (dispatch) => {
    dispatch(searchRequestAction());
    try {
      const vehicles = await ListApiService.getSearchResult(searchData);
      const vehiclesById = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle;
        return acc;
      }, {});
      dispatch(searchSuccessAction(vehiclesById));
    } catch (error) {
      dispatch(searchFailureAction());
    }
  };
};

export const setPriceHTL = () => {
  return (dispatch) => {
    dispatch(setSortHTLAction());
  };
};

export const setPriceLTH = () => {
  return (dispatch) => {
    dispatch(setSortLTHAction());
  };
};

export const setPriceRange = (range) => {
  return (dispatch) => {
    dispatch(setPriceRangeAction(range));
  };
};

export const setFilters = (number_of_seats, types, brands, engines, gears) => {
  return (dispatch) => {
    dispatch(setFiltersAction(gears, brands, types, number_of_seats, engines));
  };
};
