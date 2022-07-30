import VehiclesListContainer from '../../components/vehicles-list/VehiclesListContainer';
import FilterResultsBar from '../../components/filterSearchResultsBar/FilterResultsBar';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import SearchPlaceHolder from './SearchPlaceHolder';

const SearchResultsPage = () => {
  const filteredVehicles = useSelector(
    (state) => state.searchSlice.searchedVehicles
  );
  const isLoading = useSelector((state) => state.viewSlice.isLoading);
  const isError = useSelector((state) => state.viewSlice.isError);

  console.log(isLoading);
  console.log(filteredVehicles);

  if (filteredVehicles.length === 0) {
    return <SearchPlaceHolder />;
  }
  return (
    <section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div>
          <FilterResultsBar />
          <VehiclesListContainer vehicles={filteredVehicles} />
        </div>
      )}
    </section>
  );
};

export default SearchResultsPage;
