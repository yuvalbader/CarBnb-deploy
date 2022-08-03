import ListApiService from "../../services/list-api-service"
import actionTypes from "./constants"

const fetchVehiclesRequestAction = () => ({
  type: actionTypes.FETCH_VEHICLES_REQUEST,
})

const fetchVehiclesSuccessAction = (vehicles) => ({
  type: actionTypes.FETCH_VEHICLES_SUCCESS,
  vehicles,
})

const fetchVehiclesFailureAction = () => ({
  type: actionTypes.FETCH_VEHICLES_FAILURE,
})

const fetchVehiclesHomePAgeRequestAction = () => ({
  type: actionTypes.FETCH_VEHICLESHOMEPAGE_REQUEST,
})

const fetchVehiclesHomePAgeSuccessAction = (vehicles) => ({
  type: actionTypes.FETCH_VEHICLESHOMEPAGE_SUCCESS,
  vehicles,
})

const fetchVehiclesHomePAgeFailureAction = () => ({
  type: actionTypes.FETCH_VEHICLESHOMEPAGE_FAILURE,
})

export const fetchMyVehicles = () => {
  return async (dispatch, getState) => {
    dispatch(fetchVehiclesRequestAction())
    try {
      const id = getState().userSlice.userObject.id
      const vehicles = await ListApiService.getMyCars(id)
      const vehiclesById = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle
        return acc
      }, {})
      dispatch(fetchVehiclesSuccessAction(vehiclesById))
    } catch (error) {
      dispatch(fetchVehiclesFailureAction())
    }
  }
}

export const mainPageVehicles = () => {
  return async (dispatch) => {
    dispatch(fetchVehiclesHomePAgeRequestAction())
    try {
      const vehicles = await ListApiService.getCarsList()
      const vehiclesById = vehicles.reduce((acc, vehicle) => {
        acc[vehicle.id] = vehicle
        return acc
      }, {})
      dispatch(fetchVehiclesHomePAgeSuccessAction(vehiclesById))
    } catch (error) {
      dispatch(fetchVehiclesHomePAgeFailureAction())
    }
  }
}
