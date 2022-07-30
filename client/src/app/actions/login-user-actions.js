import actionTypes from './constants';

const loginUserSuccessAction = (userObject) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  userObject,
});

export const loginUser = (userData) => {
  return (dispatch) => {
    dispatch(loginUserSuccessAction(userData));
  };
};
