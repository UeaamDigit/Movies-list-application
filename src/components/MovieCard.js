import React ,{ useContext } from "react";
import { GlobalContext } from "../context/GlobalState"; 
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  const {  isDarkMode, toggleDarkMode } = useContext(GlobalContext); 
  return (
    <div className={`movie-card ${isDarkMode ? "light-mode" : "dark-mode"}`}>
      <h4 style={{textAlign:"center",padding:0}}>{movie.title}</h4>
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
      
    </div>
  );
};
