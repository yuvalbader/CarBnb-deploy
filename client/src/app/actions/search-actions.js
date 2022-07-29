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
