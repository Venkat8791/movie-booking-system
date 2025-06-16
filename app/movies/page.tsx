import React, { Suspense } from "react";
import MovieList from "../_components/MovieList";
import { NextPage } from "next";

export const metadata = {
  title: "Movies",
};

const MoviesPage: NextPage = () => {
  return (
    <div>
      <h1>Now Showing</h1>
      <Suspense>
        <MovieList />
      </Suspense>
    </div>
  );
};

export default MoviesPage;
