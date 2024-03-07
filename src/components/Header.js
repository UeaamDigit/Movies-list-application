import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { GlobalContext } from "../context/GlobalState";
import logoIcon from "./watchIcon.png";

export const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(GlobalContext);

  return (
    <header className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <img src={logoIcon} style={{ width: "40px", height: "40px" }} />
            <Link to="/">Watch</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <button
                onClick={toggleDarkMode}
                style={{
                  borderRadius: "8px",
                  width: "50px",
                  backgroundColor: "#21d07a",
                  border: "none",
                }}
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                <br></br>
                {isDarkMode ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
