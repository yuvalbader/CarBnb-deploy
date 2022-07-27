import "./App.css"
import NavBarComponent from "./components/NavBar/Index"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import MyProfile from "./pages/MyProfile/MyProfile"

function App() {
  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/MyProfile" exact element={<MyProfile />} />
      </Routes>
    </>
  )
}

export default App
