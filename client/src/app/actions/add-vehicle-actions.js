import ListApiService from "../../services/list-api-service";
import actionTypes from "./constants";

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
  return async (dispatch, getState) => {
    dispatch(addVehicleRequestAction());
    try {
      const id = getState().userSlice.userObject.id;
      let data = vehicleData;
      data = { ...data, user_id: id };
      const vehicle = await ListApiService.addVehicle(data);
      dispatch(addVehicleSuccessAction(vehicle));
    } catch (error) {
      console.error(error.message);
      dispatch(addVehicleFailureAction());
    }
  };
};
