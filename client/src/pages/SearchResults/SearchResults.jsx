import VehiclesListContainer from '../../components/vehicles-list/VehiclesListContainer';
import FilterResultsBar from '../../components/filterSearchResultsBar/FilterResultsBar';
import { useSelector } from 'react-redux';

const SearchResultsPage = () => {
  const filteredVehicles = useSelector((state) => state.searchSlice);

  return (
    <section>
      <FilterResultsBar />
      <VehiclesListContainer
        vehicles={filteredVehicles}
      ></VehiclesListContainer>
    </section>
  );
};

export default SearchResultsPage;
