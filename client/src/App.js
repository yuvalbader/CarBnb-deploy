import './App.css';
import NavBarComponent from './components/NavBar/Index';
import SearchComponent from './components/Search/Index';
import AddNewVehicleForm from './components/list-new-vehicle-form/ListNewCarForm';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <SearchComponent />
      <AddNewVehicleForm />
    </div>
  );
}

export default App;
