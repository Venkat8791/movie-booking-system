import { API_BASE_URL } from "../../config";
import {
  GetMovieShowTimesDTO,
  GetMoviesResponseDTO,
  Movie,
} from "../types/movie";

export async function getMovies() {
  const response: Response = await fetch(`${API_BASE_URL}/movies`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const movies: GetMoviesResponseDTO = await response.json();
  return movies;
}

export async function getMovie(id: number) {
  const response: Response = await fetch(`${API_BASE_URL}/movies/${id}`);
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const movie: Movie = await response.json();
  return movie;
}

export async function getMovieShowTimesForDate(
  id: number,
  date: string | Date
) {
  const response: Response = await fetch(
    `${API_BASE_URL}/movies/${id}/showtimes?showdate=${date}`
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message);
  }
  const showTimes: GetMovieShowTimesDTO = await response.json();
  return showTimes;
}
