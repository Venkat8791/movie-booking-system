export async function getMovies() {
  const movies = await fetch("http://localhost:8080/mxmovies/v1/movies");
  const data = await movies.json();
  if (!data) {
    throw new Error("Failed to fetch data");
  }
  console.log(data);
  return data;
}

export async function getMovie(id) {
  const movie = await fetch("http://localhost:8080/mxmovies/v1/movies/" + id);
  const data = await movie.json();
  if (!data) {
    throw new Error("Failed to fetch data");
  }
  console.log(data);
  return data;
}
