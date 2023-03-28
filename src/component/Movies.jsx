import React from "react";
import { StateContextCustom } from "../context/StateContext";
import Movie from "./Movie";

const Movies = () => {
  const {
    state: { movies },
  } = StateContextCustom();
  return (
    <div>
      <div className=" flex flex-wrap gap-10 justify-center mt-20">
        {movies?.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
