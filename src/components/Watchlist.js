import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState"; 
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist, isDarkMode, toggleDarkMode } = useContext(GlobalContext); 

  return (
    <div className={`movie-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <div className="header">
          <h1 className={`heading ${isDarkMode ? "dark-mode" : "light-mode"}`}>My Watchlist</h1>

          <Link to="/add" className="btn btn-main" style={{textDecoration:"none"}}>
            + Add a Movie
          </Link>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? " Movie" : " Movies"}
          </span>

        
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
