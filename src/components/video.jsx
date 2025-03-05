import React, { useState } from "react";
import { RiHeart3Line } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function Video({ video }) {
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
  const [liked, setLiked] = useState(isFavorite(video.id));

  function handleLike() {
    setLiked(!liked);
    if (isFavorite(video.id)) {
      removeFromFavorites(video.id);
    } else {
      addToFavorites(video);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://media.themoviedb.org/t/p/w500${video.poster_path}`} alt={video.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleLike}>
            {liked ? (
              <RiHeart3Fill color="red" />
            ) : (
              <RiHeart3Line color="red" />
            )}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h4>{video.title}</h4>
        <p>{video.release_date}</p>
      </div>
    </div>
  );
}

export default Video;
