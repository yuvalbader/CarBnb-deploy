import vehiclesSlice from './vehicles-reducers';
import searchSlice from './search-reducers';
import viewSlice from './view-reducers';
import userSlice from './user-reducers';

import { combineReducers } from 'redux';
const allReducers = combineReducers({
  vehiclesSlice,
  searchSlice,
  viewSlice,
  userSlice,
});
export default allReducers;
