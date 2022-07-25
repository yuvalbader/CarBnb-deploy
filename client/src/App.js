import "./App.css"
import NavBarComponent from "./components/NavBar/Index"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  )
}

export default App
