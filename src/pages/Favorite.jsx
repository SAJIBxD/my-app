import Video from "../components/video";
import '../css/Favorites.css';
import { useMovieContext } from "../contexts/MovieContext";
  
function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No favorite movie yet</h2>
        <p>Start adding movies to your favorites and they will appear here!</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favorite Movies</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <Video key={movie.id} video={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;