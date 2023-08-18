import { useState } from "react";
import "./App.css";
import { searchMovie } from "./api";
import PopularMovieList from "./Components/popularMovieList"; // Impor komponen
import "bootstrap/dist/css/bootstrap.min.css"; // Impor file CSS Bootstrap

const App = () => {
  const [popularmovies, setPopularMovies] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = async () => {
    if (searchKeyword.length > 0) {
      const query = await searchMovie(searchKeyword);
      setPopularMovies(query.results);
      setSearching(true);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Ashabil Movie's</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search movie"
              onChange={({ target }) => setSearchKeyword(target.value)}
            />
            <button className="btn btn-dark" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {searching && <PopularMovieList movies={popularmovies} />}
        </div>
      </div>
    </div>
  );
};

export default App;
