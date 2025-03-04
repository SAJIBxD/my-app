import React, { useState } from "react";
import { RiHeart3Line } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";
import "../css/MovieCard.css";

function Video({ video }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
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
