import ListApiService from "../../services/list-api-service";
import actionTypes from "./constants";
// import { useSelector } from "react-redux"

const fetchMyReservationsRequestAction = () => ({
  type: actionTypes.FETCH_MY_RESERVATIONS_REQUEST,
});

const fetchMyReservationsSuccessAction = (reservations) => ({
  type: actionTypes.FETCH_MY_RESERVATIONS_SUCCESS,
  reservations,
});

const fetchMyReservationsFailureAction = () => ({
  type: actionTypes.FETCH_MY_RESERVATIONS_FAILURE,
});

const fetchMyOrdersRequestAction = () => ({
  type: actionTypes.FETCH_MY_ORDERS_REQUEST,
});

const fetchMyOrdersSuccessAction = (orders) => ({
  type: actionTypes.FETCH_MY_ORDERS_SUCCESS,
  orders,
});

const fetchMyOrdersFailureAction = () => ({
  type: actionTypes.FETCH_MY_ORDERS_FAILURE,
});

export const fetchMyReservations = () => {
  return async (dispatch, getState) => {
    dispatch(fetchMyReservationsRequestAction());
    try {
      const id = getState().userSlice.userObject.id;
      let myReservations = await ListApiService.getMyReservations(id);
      const myReservationsById = myReservations.reduce((acc, reservation) => {
        acc[reservation.id] = reservation;
        return acc;
      }, {});

      dispatch(fetchMyReservationsSuccessAction(myReservationsById));
    } catch (error) {
      console.error(error);
      dispatch(fetchMyReservationsFailureAction());
    }
  };
};

export const fetchMyOrders = () => {
  return async (dispatch, getState) => {
    dispatch(fetchMyOrdersRequestAction());
    try {
      const id = getState().userSlice.userObject.id;
      const myOrders = await ListApiService.getMyOrders(id);
      const myOrdersById = myOrders.reduce((acc, order) => {
        acc[order.id] = order;
        return acc;
      }, {});
      dispatch(fetchMyOrdersSuccessAction(myOrdersById));
    } catch (error) {
      dispatch(fetchMyOrdersFailureAction());
    }
  };
};
