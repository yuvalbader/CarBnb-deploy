import ListApiService from "../../services/list-api-service"
import actionTypes from "./constants"
import { getUserId } from "../selectors/user-selector"
import { getUserState } from "../selectors/user-selector"
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

export const fetchVehicles = () => {
  const state = getUserState()
  return async (dispatch) => {
    dispatch(fetchVehiclesRequestAction())
    try {
      const userId = getUserId(state)
      const vehicles = await ListApiService.getOwnerCars(userId)
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
