import actionTypes from './constants';
import { createSelector } from '@reduxjs/toolkit';
import { getWhere } from '../selectors/search-selectors';

const fetchAction = () => {
  return {
    type: actionTypes.FETCH_VEHICLE_REQUEST,
  };
};
const addAction = (vehicle) => {
  return {
    type: actionTypes.ADD_VEHICLE_REQUEST,
    vehicle,
  };
};

const removeAction = (vehicle) => {
  return {
    type: actionTypes.REMOVE_VEHICLE_REQUEST,
    vehicle,
  };
};

export const fetchVehicles = () => {
  return (dispatch) => {
    dispatch(fetchAction());
  };
};

export const addVehicle = (vehicle) => {
  return (dispatch) => {
    dispatch(addAction(vehicle));
  };
};

export const removeVehicle = (vehicle) => {
  return (dispatch) => {
    dispatch(removeAction(vehicle));
  };
};
