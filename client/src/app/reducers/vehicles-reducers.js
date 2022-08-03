import actionTypes from "../actions/constants"

const initialState = {
  myVehicles: {},
  mainPageVehicles: {},
}

const vehiclesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLES_SUCCESS: {
      const { vehicles } = action
      return { ...state, myVehicles: vehicles }
    }

    case actionTypes.ADD_VEHICLE_SUCCESS: {
      const { vehicle } = action
      return {
        ...state,
        myVehicles: { ...state.myVehicles, [vehicle.id]: vehicle },
      }
    }
    case actionTypes.REMOVE_VEHICLE_SUCCESS: {
      const { vehicle } = action
      const vehicles = { ...state }
      delete vehicles[vehicle.id]
      return { ...state, myVehicles: vehicles }
    }

    case actionTypes.FETCH_VEHICLESHOMEPAGE_SUCCESS: {
      const { vehicles } = action
      return { ...state, mainPageVehicles: vehicles }
    }

    default:
      return state
  }
}

export default vehiclesReducer
