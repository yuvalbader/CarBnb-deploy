import './App.css';
import NavBarComponent from './components/NavBar/Index';
import AddVehicle from './components/list-new-vehicle-form/ListNewCarForm';
import MyProfile from './pages/MyProfile/MyProfile';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-vehicle" exact element={<AddVehicle />} />
        <Route path="/MyProfile" exact element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
