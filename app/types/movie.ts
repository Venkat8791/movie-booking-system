import { GetShowTimeDTO } from "./show";

export type Movie = {
  id: number;
  title: string;
  duration: number;
  genre: string;
  rating: number;
  posterUrl: string;
  description: string;
  languages: string[];
};

export type GetMoviesResponseDTO = {
  movies: Movie[];
};

export type GetMovieShowTimesDTO = {
  showDate: string;
  showTimes: GetShowTimeDTO[];
};
