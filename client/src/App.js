import './App.css';
import NavBarComponent from './components/NavBar/Index';
import AddVehicle from './components/list-new-vehicle-form/ListNewCarForm';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-vehicle" exact element={<AddVehicle />} />
      </Routes>
    </>
  );
}

export default App;
