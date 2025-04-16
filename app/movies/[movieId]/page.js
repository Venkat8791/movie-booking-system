import MovieDetails from "@/app/_components/MovieDetails";
import ShowTimesSection from "@/app/_components/ShowTimesSection";
import {
  getMovie,
  getMovieShowTimes,
  getMovieShowTimesForDate,
} from "@/app/_lib/movie-data-service";
import React from "react";

export const metadata = {
  title: "Movie",
};

export default async function Page({ params, searchParams }) {
  const movieId = await params.movieId;
  const movie = await getMovie(movieId);
  const date =
    (await searchParams?.date) || new Date().toISOString().split("T")[0];
  console.log(date);
  const cinemas = await getMovieShowTimesForDate(movieId, date);
  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <>
      {/* movie details */}
      <MovieDetails movie={movie} />

      {/* show time */}
      <ShowTimesSection
        date={date}
        showTimes={cinemas.showTimes}
        movieId={movieId}
      />
    </>
  );
}
