import VehiclesListContainer from "../../components/vehicles-list/VehiclesListContainer"
import FilterResultsBar from "../../components/filterSearchResultsBar/FilterResultsBar"
import { useSelector } from "react-redux"
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner"
import SearchPlaceHolder from "./SearchPlaceHolder"
import ErrorPlaceHolder from "./ErrorPlaceHolder"
import { useState } from "react"

const SearchResultsPage = () => {
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

  if (filteredVehicles.length === 0) {
    setTimeout(() => {
      window.location.href = "/"
    }, 3000)
    return (
      <section>
        <SearchPlaceHolder />
      </section>
    )
  }

  return (
    <section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && !isError && (
        <div>
          <FilterResultsBar minPrice={minPrice} maxPrice={maxPrice} />
          <VehiclesListContainer vehicles={filteredVehicles} />
        </div>
      )}
      {isError && !isLoading && <ErrorPlaceHolder />}
    </section>
  )
}

export default SearchResultsPage
