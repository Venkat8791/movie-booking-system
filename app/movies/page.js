import React, { Suspense } from "react";
import MovieCard from "../_components/MovieCard";
import MovieList from "../_components/MovieList";

export const metadata = {
  title: "Movies",
};

export default function Page() {
  return (
    <div>
      <h1>Now Showing</h1>
      <Suspense>
        <MovieList />
      </Suspense>
    </div>
  );
}
