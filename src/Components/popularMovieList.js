import React from "react";
import "./Components.css";

const PopularMovieList = ({ movies }) => {
  return (
    <>
      {movies.length > 0 && (
        <>
          {movies.map((movie, i) => (
            <div className="card" key={i}>
              {/* <div className="movie-title">{movie.title}</div> */}
              <img
                className="movie-image"
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                alt="Images"
              />
               <div className="movie-date">{movie.release_date.split("-")[0]}</div> {/* Ambil tahun dengan split */}
              <div className="movie-rate">Rating : {movie.vote_average}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
};



export default PopularMovieList;
