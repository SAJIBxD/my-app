import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../sevices/api";
import "../css/Movie.css";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Failed to load movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!movie) return <div className="not-found">Movie not found</div>;

  return (
    <div className="movie-container">
      <div
        className="movie-backdrop"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="backdrop-overlay"></div>
      </div>

      <div className="movie-content">
        <div className="movie-thumbnail">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="movie-details">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="release-date">
              {movie.release_date.split("-")[0]}
            </span>
            <span className="runtime">{movie.runtime} minutes</span>
            <span className="rating">★ {movie.vote_average.toFixed(1)}</span>
          </div>

          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>

          <div className="overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>

          <div className="additional-info">
            <div className="info-item">
              <span className="label">Status:</span>
              <span className="value">{movie.status}</span>
            </div>
            <div className="info-item">
              <span className="label">Original Language:</span>
              <span className="value">
                {movie.original_language.toUpperCase()}
              </span>
            </div>
            <div className="info-item">
              <span className="label">Budget:</span>
              <span className="value">${movie.budget.toLocaleString()}</span>
            </div>
            <div className="info-item">
              <span className="label">Revenue:</span>
              <span className="value">${movie.revenue.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
