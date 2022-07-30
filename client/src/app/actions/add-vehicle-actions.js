import ListApiService from '../../services/list-api-service';
import actionTypes from './constants';

const addVehicleRequestAction = () => ({
  type: actionTypes.ADD_VEHICLE_REQUEST,
});

const addVehicleSuccessAction = (vehicleData) => ({
  type: actionTypes.ADD_VEHICLE_SUCCESS,
  vehicle: vehicleData,
});

const addVehicleFailureAction = () => ({
  type: actionTypes.ADD_VEHICLE_FAILURE,
});

export const addVehicle = (vehicleData) => {
  return async (dispatch) => {
    dispatch(addVehicleRequestAction());
    try {
      const vehicle = await ListApiService.addVehicle(vehicleData);
      dispatch(addVehicleSuccessAction(vehicle));
    } catch (error) {
      dispatch(addVehicleFailureAction());
    }
  };
};
