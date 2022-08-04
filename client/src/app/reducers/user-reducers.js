import actionTypes from "../actions/constants";

const initialState = {
  isLoggedIn: false,
  userObject: {},
  reservations: {},
  orders: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MY_RESERVATIONS_SUCCESS: {
      const { reservations } = action;
      return { ...state, reservations: reservations };
    }

    case actionTypes.FETCH_MY_ORDERS_SUCCESS: {
      const { orders } = action;
      return { ...state, orders: orders };
    }

    case actionTypes.FETCH_MY_ORD_AND_RES_SUCCESS: {
      const { results } = action;
      return { ...state, orders: results[0], reservations: results[1] };
    }

    case actionTypes.LOGIN_USER_SUCCESS: {
      const { userObject } = action;
      return { ...state, userObject: userObject, isLoggedIn: true };
    }

    default:
      return state;
  }
};

export default userReducer;
