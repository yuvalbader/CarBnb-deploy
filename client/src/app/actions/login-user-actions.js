import actionTypes from './constants';

const loginUserSuccessAction = (userObject) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  userObject,
});

export const loginUser = (userEmail) => {
  return (dispatch) => {
    dispatch(loginUserSuccessAction(userEmail));
  };
};
