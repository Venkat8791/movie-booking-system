export async function getMovies() {
  const movies = await fetch("http://localhost:8080/mxmovies/v1/movies");
  const data = await movies.json();
  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export async function getMovie(id) {
  const movie = await fetch("http://localhost:8080/mxmovies/v1/movies/" + id);
  const data = await movie.json();
  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export async function getMovieShowTimesForDate(id, date) {
  const response = await fetch(
    "http://localhost:8080/mxmovies/v1/movies/" +
      id +
      "/showtimes?showdate=" +
      date
  );
  if (!response.ok) {
    console.log("Error fetching show times:", response.status);
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const showTimes = await response.json();
  if (!showTimes) {
    throw new Error("Failed to fetch data");
  }

  return showTimes;
}
