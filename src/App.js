import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import { About } from "./components/About";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="body">
        <div class="ring">
          Loading
          <span></span>
        </div>
      </div>
    );
  } else {
    return (
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/add" element={<Add />} />
            <Route path="/about" element={<About />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </Router>
      </GlobalProvider>
    );
  }
}

export default App;
