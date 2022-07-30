import "./App.css";
import NavBarComponent from "./components/NavBar/Index";
import AddVehicle from "./components/list-new-vehicle-form/ListNewCarForm";
import MyProfile from "./pages/MyProfile/MyProfile";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Car } from "./pages/Car/Car";
import OrdersContainer from "./components/OrdersContainer/OrdersContainer";
import "./App.css";
import MyCars from "./components/MyCars/MyCars";
import SearchResultsPage from './pages/SearchResults/SearchResults';

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-vehicle" exact element={<AddVehicle />} />
        <Route path="MyProfile" element={<MyProfile />}>
          <Route index element={<OrdersContainer page="trips" />} />
          <Route path="trips" element={<OrdersContainer page="trips" />} />
          <Route path="reservations" element={<OrdersContainer page="reservations" />} />
          <Route path="mycars" element={<MyCars />} />
        </Route>
        <Route path="/searchResult" exact element={<SearchResultsPage />} />
        <Route path="/car/:id" element={<Car />} />
      </Routes>
    </>
  );
}

export default App;
