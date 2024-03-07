import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched , isDarkMode, toggleDarkMode } = useContext(GlobalContext);
 

  return (
    <div className={`movie-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <div className="header">
          <h1 className={`heading ${isDarkMode ? "dark-mode" : "light-mode"}`}>Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
