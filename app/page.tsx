import { NextPage } from "next";
import { getMovies } from "./_lib/movie-data-service";
import MovieCarousel from "./_components/MovieCarousel";
import { Movie } from "./types/movie";

const HomePage: NextPage = async () => {
  const data = await getMovies();
  const movies: Movie[] = data?.movies ?? [];
  return <MovieCarousel movies={movies} />;
};

export default HomePage;
