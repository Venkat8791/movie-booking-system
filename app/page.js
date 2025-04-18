import MovieCarousel from "./_components/MovieCarousel";
import { getMovies } from "./_lib/movie-data-service";

export default async function Page() {
  const data = await getMovies();
  const movies = data?.movies || [];
  return <MovieCarousel movies={movies} />;
}
