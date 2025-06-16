import React from "react";
import MovieCard from "./MovieCard";
import { getMovies } from "../_lib/movie-data-service";

const MovieList: React.FC = async () => {
  const data = await getMovies();
  const movies = data?.movies || [];
  if (!movies.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
