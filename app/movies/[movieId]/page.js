import React from "react";

export const metadata = {
  title: "Movie",
};

export default function Page({ params }) {
  const movieId = params.movieId;
  return (
    <div>
      <p>Hello movie -{movieId}</p>
    </div>
  );
}
