import vehiclesSlice from './vehicles-reducers';
import searchSlice from './search-reducers';
import viewSlice from './view-reducers';

import { combineReducers } from 'redux';
const allReducers = combineReducers({
  vehiclesSlice,
  searchSlice,
  viewSlice,
});
export default allReducers;
