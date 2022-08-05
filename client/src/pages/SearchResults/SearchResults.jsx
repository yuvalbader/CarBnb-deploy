import VehiclesListContainer from "../../components/vehicles-list/VehiclesListContainer"
import FilterResultsBar from "../../components/filterSearchResultsBar/FilterResultsBar"
import { useSelector } from "react-redux"
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner"
import SearchPlaceHolder from "./SearchPlaceHolder"
import ErrorPlaceHolder from "./ErrorPlaceHolder"
import { useLocation } from "react-router-dom"

const SearchResultsPage = () => {
  const location = useLocation()
  const filteredVehicles = useSelector(
    (state) => state.searchSlice.searchedVehicles
  )
  const isLoading = useSelector((state) => state.viewSlice.isLoading)
  const isError = useSelector((state) => state.viewSlice.isError)

  const prices = filteredVehicles.map((vehicle) =>
    parseInt(vehicle.price_per_day)
  )
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  return (
    <section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && !isError && (
        <div>
          <FilterResultsBar minPrice={minPrice} maxPrice={maxPrice} />
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
  )
}

export default SearchResultsPage
