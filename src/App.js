import React, { useState } from "react";
import "./App.css";
import GifCard from "./components/GifCard.js";
import GifSearch from "./GifSearch";
function App() {
  const [search, setSearch] = useState(false);
  return (
    <div className="gifCard">
      {!search ? (
        <div>
          <h1>Trending Gifs</h1>
          <button onClick={() => setSearch(true)}>Search</button>
          <GifCard />
        </div>
      ) : (
        <div> 
          
          <button onClick={() => setSearch(false)}>Trending</button>
          <GifSearch />
        </div>
      )}
    </div>
  );
}
export default App;