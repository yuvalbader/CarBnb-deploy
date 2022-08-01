import "./App.css"
import React, { useEffect } from "react"
import NavBarComponent from "./components/NavBar/Index"
import AddVehicle from "./components/list-new-vehicle-form/ListNewCarForm"
import MyProfile from "./pages/MyProfile/MyProfile"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import { Car } from "./pages/Car/Car"
import OrdersContainer from "./components/OrdersContainer/OrdersContainer"
import "./App.css"
import MyCars from "./components/MyCars/MyCars"
import SearchResultsPage from "./pages/SearchResults/SearchResults"
import { useSelector, useDispatch } from "react-redux"
import { fetchVehicles } from "./app/actions/fetch-vehicles-actions"
import { getIsLoading } from "./app/selectors/view-selectors"
import ListApiService from "./services/list-api-service"
function App() {
  const dispatch = useDispatch()
  const loading = useSelector(getIsLoading)
  const [vehicles, setVehicles] = React.useState([])
  useEffect(() => {
    dispatch(fetchVehicles())
    ListApiService.getBrandList().then((res) => {
      setVehicles(res)
    })
  }, [dispatch])

  if (loading) {
    return (
      <div className="loading_container">
        <img
          className="loading_page"
          src="https://cdn.dribbble.com/users/778626/screenshots/4339853/media/35ef4328e6a9fa16ef277436cab1dc09.gif"
          alt="loading"
        />
      </div>
    )
  }
  else 
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-vehicle" exact element={<AddVehicle />} />
        <Route path="MyProfile" element={<MyProfile />}>
          <Route index element={<OrdersContainer page="trips" />} />
          <Route path="trips" element={<OrdersContainer page="trips" />} />
          <Route
            path="reservations"
            element={<OrdersContainer page="reservations" />}
          />
          <Route path="mycars" element={<MyCars />} />
        </Route>
        <Route path="/searchResult" exact element={<SearchResultsPage />} />
        <Route path="/car/:id" element={<Car />} />
      </Routes>
    </>
  )
}

export default App
