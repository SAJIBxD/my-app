import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    {
      storedFavorites && setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    {
      favorites.length > 0
        ? localStorage.setItem("favorites", JSON.stringify(favorites))
        : localStorage.removeItem("favorites");
    }
  }, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
