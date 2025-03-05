import { useState, useEffect } from "react";
import Thumbnail from "../components/thumbnail";
import Video from "../components/video";
import { searchMovie, getMovies } from "../sevices/api";
import "../css/Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
        console.error(error);
        setError("An error occurred. Awkward...");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async  (e) => {
    e.preventDefault();
    if (!search.trim()) return
    if (loading) return

    setLoading(true)
    try {
      const searchResult = await searchMovie(search);
      setMovies(searchResult);
      setError(null); 
    }catch (error) {
      console.log(error);
      setError("Failed to search ...");
    }finally{
      setLoading(false)
    } 
  }

  return (
    <>
      <div className="home">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="movies-grid">
            {movies.map((video) =>
            video.title.toLowerCase().includes(search.toLowerCase()) && (
              <Video key={video.id} video={video} />
            )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
