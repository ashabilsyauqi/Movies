import React from "react";
import "./Components.css";

const PopularMovieList = ({ movies }) => {
  return (
    <>
      {movies.length > 0 ? (
        movies.map((movie, i) => (
          <div
            className="card"
            key={i}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path})`
            }}
          >
                    <div className="movie-date">{movie.release_date.split("-")[0]}</div> {/* Ambil tahun dengan split */}
            <div className="movie-rate">
              ⭐ : {parseFloat(movie.vote_average).toFixed(1)}
            </div>
          </div>
        ))
      ) : (
        <div className="no-movies-found">Film apaantu? gak nemu saya mas.. 🤷‍♂️🤷‍♀️</div>
      )}
    </>
  );
};

export default PopularMovieList;
