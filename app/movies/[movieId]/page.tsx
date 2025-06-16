import { NextPage } from "next";
import React from "react";
import {
  getMovie,
  getMovieShowTimesForDate,
} from "../../_lib/movie-data-service";
import ShowTimesSection from "../../_components/ShowTimesSection";
import MovieDetails from "../../_components/MovieDetails";

export const metadata = {
  title: "Movie",
};

type PageProps = {
  params: {
    movieId: number; // or whatever route param your page uses
  };
  searchParams: any;
};

const MoviePage: NextPage<PageProps> = async ({ params, searchParams }) => {
  params = await params;
  const movieId = params.movieId;
  const movie = await getMovie(movieId);
  searchParams = await searchParams;
  const dateParam = Array.isArray(searchParams.date)
    ? searchParams.date[0]
    : searchParams.date;
  const date: string | Date =
    dateParam || new Date().toISOString().split("T")[0];
  const languageFilter = searchParams?.language || "all";
  let cinemas = null;
  let cinemasError = null;
  try {
    cinemas = await getMovieShowTimesForDate(movieId, date);
  } catch (error: any) {
    console.log("Error fetching show times:", error.message);
    cinemasError = error;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  let showTimes = null;
  if (!cinemasError) {
    showTimes = cinemas ? cinemas.showTimes : null;
  }

  return (
    <>
      {/* movie details */}
      <MovieDetails movie={movie} />

      {/* show time */}
      <ShowTimesSection
        error={cinemasError}
        date={date}
        showTimes={showTimes}
        movieId={movieId}
        languageFilter={languageFilter}
      />
    </>
  );
};
export default MoviePage;
