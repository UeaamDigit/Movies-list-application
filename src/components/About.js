import React, { useContext } from "react";
import image from '../images/Checklist-amico.png';
import imgS from '../images/search.png';
import imgL from '../images/watchList.png';
import imgD from '../images/watched.png';


import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const About = () => {
  const { isDarkMode, toggleDarkMode } = useContext(GlobalContext);
  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="firstBox">
        <div className="boxImg">
          <img src={image} alt="image" className="FirstImg" />
        </div>

        <div className={`seBox ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <h1>W E L C O M E ..</h1>
          <p>
            At WatchList, we are dedicated to providing you with a seamless and
            organized movie-watching experience. Our platform is designed to
            meet your needs, helping you curate and manage your movie lists
            effortlessly. Explore, organize, and enjoy your favorite movies with
            WatchList.
          </p>
        </div>
      </div>

      <hr></hr>

      <div>
        <h1 className={`first ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <span>1</span> Search a Movie :
        </h1>
        <div className="secondBox">

          <div className={`desc ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <h3>This Page For Searching A Movie</h3>
            <p>Here is the Link</p>
            <Link to="/add" className="btn btn-main" style={{textDecoration:"none"}}>
              + Add a Movie
            </Link>
          </div>

          <div className="boxImage">
            <img src={imgS} className="FirstImage" alt="image" />
          </div>
        </div>
      </div>

      <hr></hr>

      <div>
        <h1 className={`first ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <span>2</span> Lists Of Movies  :
        </h1>

        <div className="secondBox">
          <div className="boxImage">
            <img src={imgL} className="FirstImage" alt="image" />
          </div>

          <div className={`desc ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <h3>This Page For The Lists Of Movies you Searched </h3>
            <p>Here is the Link</p>
              <Link to="/watchlist" className="btn btn-main" style={{textDecoration:"none"}}>
                Watch Lists 
              </Link>
          </div>

        </div>
      </div>

      <hr></hr>
      <div>
        <h1 className={`first ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <span>3</span> Lists Of Movies Watched:
        </h1>
        <div className="secondBox">
          <div className={`desc ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <h3>This Page For The Lists Of Movies you Watched Before and Finished</h3>
            <p>Here is the Link</p>
            <Link to="/watched" className="btn btn-main" style={{textDecoration:"none"}}>
              Watched Movies
            </Link>
          </div>
          <div className="boxImage">
            <img src={imgD} className="FirstImagee" alt="image" />
          </div>
        </div>
      </div>

    </div>
  );
};
