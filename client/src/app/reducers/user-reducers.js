import actionTypes from '../actions/constants';

const initialState = {
  reservstions:[],
  orders:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {


    default:
      return state;
  }
};

export default userReducer;
