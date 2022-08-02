import axios from "axios"
import ListApiService from "../../services/list-api-service"
import actionTypes from "./constants"

const fetchMyReservationsRequestAction = () => ({
  type: actionTypes.FETCH_MY_RESERVATIONS_REQUEST,
})

const fetchMyReservationsSuccessAction = (reservations) => ({
  type: actionTypes.FETCH_MY_RESERVATIONS_SUCCESS,
  reservations,
})

const fetchMyReservationsFailureAction = () => ({
  type: actionTypes.FETCH_MY_RESERVATIONS_FAILURE,
})

export const fetchMyReservations = () => {
  return async (dispatch, getState) => {
    dispatch(fetchMyReservationsRequestAction())
    try {
      const myVehicles = getState().vehiclesSlice
      const myVehiclesId = Object.keys(myVehicles)
      if (myVehiclesId.length === 0)
        return dispatch(fetchMyReservationsSuccessAction({}))
      const myReservationsPromises = myVehiclesId.map((id) => {
        return ListApiService.getReservationByCarId(id)
      })
      let myReservations = await axios.all(myReservationsPromises)
      myReservations = myReservations.flat()
      const myReservationsById = myReservations.reduce((acc, reservation) => {
        acc[reservation.id] = reservation
        return acc
      }, {})
      dispatch(fetchMyReservationsSuccessAction(myReservationsById))
    } catch (error) {
      console.error(error)
      dispatch(fetchMyReservationsFailureAction())
    }
  }
}

export const fetchMyOrders = () => {
  return async (dispatch) => {
    // dispatch(fetchMyOrdersRequestAction());
    // try {
    // const myVehicles = useSelector((state) => state.vehiclesSlice);
    // // console.log("myVehicles:", myVehicles);
    // const myVehiclesId = Object.keys(myVehicles);
    // const myReservationsById = myReservations.reduce((acc, reservation) => {
    //   acc[reservation.id] = reservation;
    //   return acc;
    // }, {});
    //   dispatch(fetchMyOrdersSuccessAction(myReservationsById));
    // } catch (error) {
    //   console.error(error);
    //   dispatch(fetchMyOrdersFailureAction());
    // }
  }
}
