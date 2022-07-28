import "./App.css"
import NavBarComponent from "./components/NavBar/Index"
import Home from "./pages/Home/Home"
import { Car } from "./pages/Car/Car"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/car/:id" element={<Car />} />
      </Routes>
    </>
  )
}

export default App
