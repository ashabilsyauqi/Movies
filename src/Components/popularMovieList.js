import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Impor file CSS Bootstrap
import './Components.css'
import ModalCard from "./ModalCard";


const PopularMovieList = ({ movies }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
      {movies.length > 0 ? (
        movies.map((movie, i) => (
          <div
            className="card col-md-3 mb-4"
            key={i}
            style={{
              backgroundImage: `url(${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path})`,
              width: '350px',
              height: '500px',
            }}
          >
            <div className="desc-movie">
              <div className="movie-date">
                {movie.release_date.split("-")[0]}
              </div>
              <div className="movie-rate">
                ⭐ : {parseFloat(movie.vote_average).toFixed(1)}
              </div>
              <ModalCard />
            </div>
          </div>
        ))
      ) : (
        <div className="no-movies-found">
          Film apaantu? gak nemu saya mas.. 🤷‍♂️🤷‍♀️
        </div>
      )}
    </div>
  );
};


export default PopularMovieList;
