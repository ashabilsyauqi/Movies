import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";
import ModalCard from "./ModalCard"; // Pastikan path-nya sesuai

const PopularMovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
      {movies.length > 0
        ? movies.map((movie, i) => (
            <div
              className="card col-md-3 mb-4"
              key={i}
              style={{
                backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path})`,
                width: "350px",
                height: "500px",
              }}
            >
              <div className="relative-container">
                <div className="desc-movie">
                  <div className="movie-date">
                    {movie.release_date.split("-")[0]}
                  </div>
                  <div className="movie-rate">
                    ⭐ : {parseFloat(movie.vote_average).toFixed(1)}
                  </div>
                </div>
                <button
                  className="btn btn-light p-2 relative-box"
                  onClick={() => handleMovieClick(movie)}
                >
                  Details
                </button>
              </div>
            </div>
          ))
        : console.log("tested")}
      {selectedMovie && (
        <ModalCard
          movie={selectedMovie}
          closeModal={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default PopularMovieList;
