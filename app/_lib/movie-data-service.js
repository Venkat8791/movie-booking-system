import { API_BASE_URL } from "@/config";

export async function getMovies() {
  const response = await fetch(`${API_BASE_URL}/movies`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const movies = await response.json();
  return movies;
}

export async function getMovie(id) {
  const response = await fetch(`${API_BASE_URL}/movies/${id}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const movie = await response.json();
  return movie;
}

export async function getMovieShowTimesForDate(id, date) {
  const response = await fetch(
    `${API_BASE_URL}/movies/${id}/showtimes?showdate=${date}`
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const showTimes = await response.json();
  return showTimes;
}
