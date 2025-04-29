import MovieDetails from "@/app/_components/MovieDetails";
import ShowTimesSection from "@/app/_components/ShowTimesSection";
import {
  getMovie,
  getMovieShowTimesForDate,
} from "@/app/_lib/movie-data-service";
import React from "react";

export const metadata = {
  title: "Movie",
};

export default async function Page({ params, searchParams }) {
  params = await params;
  const movieId = params.movieId;
  const movie = await getMovie(movieId);
  searchParams = await searchParams;
  const date = searchParams?.date || new Date().toISOString().split("T")[0];
  const languageFilter = searchParams?.language || "all";
  let cinemas = null;
  let cinemasError = null;
  try {
    cinemas = await getMovieShowTimesForDate(movieId, date);
  } catch (error) {
    console.log("Error fetching show times:", error.message);
    cinemasError = error;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <>
      {/* movie details */}
      <MovieDetails movie={movie} />

      {/* show time */}
      <ShowTimesSection
        error={cinemasError}
        date={date}
        showTimes={cinemasError ? null : cinemas.showTimes}
        movieId={movieId}
        languageFilter={languageFilter}
      />
    </>
  );
}
