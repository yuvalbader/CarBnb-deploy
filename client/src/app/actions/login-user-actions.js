import actionTypes from "./constants";
import ListApiService from "../../services/list-api-service";

const loginUserSuccessAction = (userObject) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  userObject,
});

const loginUserRequestAction = () => ({
  type: actionTypes.LOGIN_USER_REQUEST,
});

const loginUserFailureAction = () => ({
  type: actionTypes.LOGIN_USER_FAILURE,
});

export const loginUser = (email) => {
  return async (dispatch) => {
    dispatch(loginUserRequestAction());
    try {
      const getUserObj = await ListApiService.getUserByEmail(email);
      dispatch(loginUserSuccessAction(getUserObj));
    } catch (error) {
      dispatch(loginUserFailureAction());
    }
  };
};
