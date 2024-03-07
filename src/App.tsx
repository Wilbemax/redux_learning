import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Favorites from "./pages/Favorites"
import Navigation from "./Components/Navigation/Navigation"
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <Navigation />
      <div className="vh">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
      
      <Footer />
    </>
  )
}

export default App
