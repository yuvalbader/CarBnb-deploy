import { createSelector } from "@reduxjs/toolkit"
import { getWhere } from "./search-selectors"

export const getVehicles = (state) => state.vehiclesSlice

export const getFilteredVehicles = createSelector(
  getWhere,
  getVehicles,
  (searchTerm, vehicles) => {
    let filteredVehicles = vehicles

    if (searchTerm) {
      filteredVehicles = filteredVehicles.filter((vehicle) =>
        vehicle?.adress?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    return filteredVehicles
  }
)
