import "./css/App.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Movie from "./pages/Movie";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
