import React, { useState } from "react";
import { RiHeart3Line } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const [liked, setLiked] = useState(isFavorite(movie.id));
  const navigate = useNavigate();

  function handleLike(e) {
    e.stopPropagation(); // Prevent navigation when clicking the like button
    setLiked(!liked);
    {isFavorite(movie.id) ? removeFromFavorites(movie.id) : addToFavorites(movie)};
  }

  function handleClick() {
    navigate(`/movie/${movie.id}`);
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="movie-poster">
        <img
          src={`https://media.themoviedb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleLike}>
            {liked ? <RiHeart3Fill color="red" /> : <RiHeart3Line color="red" />}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h4>{movie.title}</h4>
        <p>{movie.release_date.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
