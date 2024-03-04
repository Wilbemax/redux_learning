import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Navigation from "./Components/Navigation"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />


      </Routes>
    </>
  )
}

export default App
