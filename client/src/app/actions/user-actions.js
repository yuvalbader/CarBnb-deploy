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

const fetchMyOrdAndResRequestAction = () => ({
  type: actionTypes.FETCH_MY_ORD_AND_RES_REQUEST,
});

const fetchMyOrdAndResSuccessAction = (results) => ({
  type: actionTypes.FETCH_MY_ORD_AND_RES_SUCCESS,
  results,
});

const fetchMyOrdAndResFailureAction = () => ({
  type: actionTypes.FETCH_MY_ORD_AND_RES_FAILURE,
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

export const fetchMyOrdAndRes = (id) => {
  return async (dispatch, getState) => {
    dispatch(fetchMyOrdAndResRequestAction());
    try {
      // const id = getState().userSlice.userObject.id;
      // console.log("fetchMyOrdAndRes:",id);
      const myOrders = ListApiService.getMyOrders(id);
      const myReservations = ListApiService.getMyReservations(id);
      const result = await Promise.all([myOrders, myReservations]);
      let myOrdersRes = result[0];
      let myReservationsRes = result[1];
      myOrdersRes = myOrdersRes.reduce((acc, order) => {
        acc[order.id] = order;
        return acc;
      }, {});
      myReservationsRes = myReservationsRes.reduce((acc, order) => {
        acc[order.id] = order;
        return acc;
      }, {});
      dispatch(fetchMyOrdAndResSuccessAction([myOrdersRes, myReservationsRes]));
    } catch (error) {
      dispatch(fetchMyOrdAndResFailureAction());
    }
  };
};
