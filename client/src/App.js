import './App.css';
import NavBarComponent from './components/NavBar/Index';
import MyProfile from './pages/MyProfile/MyProfile';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Car } from './pages/Car/Car';

import './App.css';
import SearchResultsPage from './pages/SearchResults/SearchResults';

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/searchResult" exact element={<SearchResultsPage />} />
        <Route path="/MyProfile" exact element={<MyProfile />} />
        <Route path="/MyProfile/reservations" exact element={<MyProfile />} />
        <Route path="/MyProfile/trips" exact element={<MyProfile />} />
        <Route path="/MyProfile/cars" exact element={<MyProfile />} />
        <Route path="/car/:id" element={<Car />} />
      </Routes>
    </>
  );
}

export default App;
