import VehiclesListContainer from '../../components/vehicles-list/VehiclesListContainer';
import FilterResultsBar from '../../components/filterSearchResultsBar/FilterResultsBar';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import SearchPlaceHolder from './SearchPlaceHolder';
import ErrorPlaceHolder from './ErrorPlaceHolder';
import { useLocation } from 'react-router-dom';
import {
  getFilteredVehicles,
  getFiltersData,
} from '../../app/selectors/search-selectors';
import { useRef } from 'react';

const SearchResultsPage = () => {
  const location = useLocation();
  const filteredVehicles = useSelector((state) => getFilteredVehicles(state));
  const vehiclesDetails = useSelector((state) => getFiltersData(state));

  const isLoading = useSelector((state) => state.viewSlice.isLoading);
  const isError = useSelector((state) => state.viewSlice.isError);

  return (
    <section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && !isError && (
        <div>
          <FilterResultsBar data={vehiclesDetails} />
          <VehiclesListContainer
            state={location.state}
            vehicles={filteredVehicles}
          />
        </div>
      )}
      {isError && !isLoading && <ErrorPlaceHolder />}
      {!isError && !isLoading && filteredVehicles.length === 0 && (
        <section>
          <SearchPlaceHolder />
        </section>
      )}
    </section>
  );
};

export default SearchResultsPage;
