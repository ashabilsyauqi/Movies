import { useState } from "react";
import "./App.css";
import { searchMovie } from "./api";
import PopularMovieList from "./Components/popularMovieList"; // Impor komponen

const App = () => {
  const [popularmovies, setPopularMovies] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(""); // State untuk menyimpan keyword pencarian

  const handleSearch = async () => {
    if (searchKeyword.length > 0) {
      const query = await searchMovie(searchKeyword);
      setPopularMovies(query.results);
      setSearching(true); // Set status searching menjadi true setelah pencarian dilakukan
    }
  };

  return (
    <div className="App">
      <h1 className="Title">Ashabil Movie's</h1>
      <header className="App-header">
       
          <input
            placeholder="cari film"
            className="movie-search"
            onChange={({ target }) => setSearchKeyword(target.value)} // Set keyword pencarian saat mengetik
          />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>{" "}
        
        {/* Gunakan handleSearch saat tombol ditekan */}
      </header>

      <div className="movie-container">
        {searching && <PopularMovieList movies={popularmovies} />}
      </div>
    </div>
  );
};

export default App;
