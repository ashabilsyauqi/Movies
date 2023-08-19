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
    <div className="  bg-dark">
      <h1 className="text-center mb-4 text-light">Ashabil Movie's</h1>
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <form
              className="d-flex justify-content-center align-items-center w-100"
              onSubmit={(e) => {
                //gunakan preventDefault untuk mencegah terjadinya event bawaaan dari sebuah DOM
                e.preventDefault(); //untuk mencegah terjadinya reload pada page
                handleSearch(); //menjalankan fungsi handleSearch
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search movie"
                onChange={({ target }) => setSearchKeyword(target.value)}
              />
              {/* button menggunakan type submit agar terbaca/detect oleh form sebagai submit / onSubmit */}

              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </form>
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
