import "./css/App.css"
import Home from "./pages/Home"
import Favorite from "./pages/Favorite"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </main>
    </div>
  )
}

export default App
