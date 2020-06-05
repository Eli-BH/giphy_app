import React, { useState } from "react";
import "./App.css";
import GifCard from "./components/GifCard.js";
import GifSearch from "./GifSearch";
function App() {
  const [search, setSearch] = useState(false);
  return (
    <div>
      {!search ? (
        <div className="gifDiv">
          <GifCard/>
          <button onClick={() => setSearch(true)}>Search for Gifs</button>
        </div>
      ) : (
        <div className = "gifSearchToggle"> 
          <GifSearch />
          <button onClick={() => setSearch(false)} className="trend-btn">Trending</button>
        </div>
      )}
    </div>
  );
}
export default App;