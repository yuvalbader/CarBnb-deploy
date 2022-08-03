import ListApiService from "../../services/list-api-service";
import actionTypes from "./constants";

const fetchVehiclesRequestAction = () => ({
  type: actionTypes.FETCH_VEHICLES_REQUEST,
});

const fetchVehiclesSuccessAction = (vehicles) => ({
  type: actionTypes.FETCH_VEHICLES_SUCCESS,
  vehicles,
});

const fetchVehiclesFailureAction = () => ({
  type: actionTypes.FETCH_VEHICLES_FAILURE,
});

export const fetchMyVehicles = () => {
  return async (dispatch, getState) => {
    dispatch(fetchVehiclesRequestAction());
    try {
      const id = getState().userSlice.userObject.id;
      const vehicles = await ListApiService.getMyCars(id);
      const vehiclesById = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle;
        return acc;
      }, {});
      dispatch(fetchVehiclesSuccessAction(vehiclesById));
    } catch (error) {
      dispatch(fetchVehiclesFailureAction());
    }
  };
};

export const fetchVehiclesToMainPage = () => {
  return async (dispatch, getState) => {
    dispatch(fetchVehiclesRequestAction());
    try {
      const id = getState().userSlice.userObject.id;
      const vehicles = await ListApiService.getMyCars(id);
      const vehiclesById = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle;
        return acc;
      }, {});
      dispatch(fetchVehiclesSuccessAction(vehiclesById));
    } catch (error) {
      dispatch(fetchVehiclesFailureAction());
    }
  };
};
