import { createSelector } from 'reselect';
import { SORT_TYPES } from '../reducers/reducersConstans';

const getSearchSlice = (state) => state.searchSlice;
export const getSerachedVehicels = (state) =>
  getSearchSlice(state).searchedVehicles;
export const getFilters = (state) => getSearchSlice(state).activatedFilters;

export const getFiltersData = createSelector(
  getSerachedVehicels,
  (vehicles) => {
    const number_of_seats = [
      ...new Set(vehicles.map((v) => v.number_of_seats)),
    ];
    const types = [...new Set(vehicles.map((v) => v.type))];
    const gears = [...new Set(vehicles.map((v) => v.gear))];
    const engines = [...new Set(vehicles.map((v) => v.engine))];
    const brands = [...new Set(vehicles.map((v) => v.brand))];
    const prices = vehicles.map((vehicle) => parseInt(vehicle.price_per_day));
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return {
      minPrice,
      maxPrice,
      gears,
      engines,
      brands,
      types,
      number_of_seats,
    };
  }
);

export const getFilteredVehicles = createSelector(
  getSerachedVehicels,
  getFilters,
  (vehicles, filters) => {
    const {
      sort,
      minPrice,
      maxPrice,
      gears,
      engines,
      brands,
      number_of_seats,
      types,
    } = filters;
    return activateFilters(
      vehicles,
      sort,
      minPrice,
      maxPrice,
      gears,
      engines,
      brands,
      number_of_seats,
      types
    );
  }
);

const activateFilters = (
  vehicles,
  sort,
  minPrice,
  maxPrice,
  gears,
  engines,
  brands,
  number_of_seats,
  types
) => {
  const priceFilterVehicles = vehicles.filter((v) =>
    checkFilters(
      v,
      minPrice,
      maxPrice,
      gears,
      brands,
      engines,
      number_of_seats,
      types
    )
  );

  switch (sort) {
    case SORT_TYPES.HIGHER_TO_LOWER:
      priceFilterVehicles.sort((v1, v2) => v2.price_per_day - v1.price_per_day);
      break;
    case SORT_TYPES.LOWER_TO_HIGHER:
      priceFilterVehicles.sort((v1, v2) => v1.price_per_day - v2.price_per_day);
      break;
    case SORT_TYPES.EMPTY:
      break;
    default:
      return priceFilterVehicles;
  }

  return priceFilterVehicles;
};

const checkFilters = (
  vehicle,
  minPrice,
  maxPrice,
  gears,
  brands,
  engines,
  number_of_seats,
  types
) => {
  return (
    vehicle.price_per_day >= minPrice &&
    vehicle.price_per_day <= maxPrice &&
    (gears.length === 0 || gears.includes(vehicle.gear)) &&
    (brands.length === 0 || brands.includes(vehicle.brand)) &&
    (engines.length === 0 || engines.includes(vehicle.engine)) &&
    (number_of_seats.length === 0 ||
      number_of_seats.includes(vehicle.number_of_seats)) &&
    (types.length === 0 || types.includes(vehicle.type))
  );
};
