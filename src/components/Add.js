import React, { useState ,useContext}  from "react";
import { ResultCard } from "./ResultCard";
import { GlobalContext } from "../context/GlobalState"; 

export const Add = () => {
  const {  isDarkMode, toggleDarkMode } = useContext(GlobalContext); 
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className={`add-page ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
      <h2 className="no-movies">Search Your Movie ...</h2>
        <div className="add-content">
       
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
              className={`  ${isDarkMode ? "light-mode" : "dark-mode"}`}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
