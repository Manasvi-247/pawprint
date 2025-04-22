import { useRef, useState } from "react";
import { SearchData } from "../store/SearchData";
import { DogData } from "../store/DogData";

export function SearchDog() {
  const [dog, setdog] = useState("");
  const dogref = useRef("");
  return (
    <div className="search-container">
      <div className="search-card">
        <h1>🔍 Find Your Perfect Dog Breed</h1>
        <h3>Sniff Out Your Perfect Pup — Explore 200+ Dog Breeds with Us! 🐕</h3>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter dog breed name..."
            onChange={(event) => (dogref.current = event.target.value)}
            className="search-input"
          />
          <button 
            className="search-button"
            onClick={() => setdog(dogref.current)}
          >
            🐾 Search Breed 🐾
          </button>
        </div>
        <SearchData.Provider value={dog}>
          <DogData></DogData>
        </SearchData.Provider>
      </div>
    </div>
  );
}
