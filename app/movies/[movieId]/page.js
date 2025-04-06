import { getMovie } from "@/app/_lib/movie-data-service";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Movie",
};

export default async function Page({ params }) {
  const movieId = await params.movieId;
  const movie = await getMovie(movieId);
  const { posterUrl, title, genre, language, rating, duration } = movie;
  console.log(movie);
  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <div className="flex flex-col rounded justify-center sm:flex-row bg-[linear-gradient(to_right,_#f7f2f2,_#ece7e4,_#f3f1f0)]">
      <div className="hidden sm:block w-full sm:w-1/3">
        <Image
          alt={title}
          src={posterUrl}
          width={200}
          height={400}
          className="object-cover rounded"
        />
      </div>
      <div className="flex flex-col w-full sm:w-2/3 p-2">
        <h2 className="text-gray-900 text-lg font-bold uppercase">{title}</h2>
        <div className="sm:flex gap-2">
          <p className="text-gray-600 italic">{duration}</p>
          <p className="text-gray-600 italic">{genre}</p>
          <p className="text-gray-600 italic">{language}</p>
        </div>
        <p className="text-yellow-400 font-bold mt-1">⭐ {rating}</p>
        <p className="text-black-600">
          Cooper and a team of astronauts travel through the wormhole in search
          of a habitable planet, facing perilous situations and the complexities
          of time and space travel.
        </p>
      </div>
    </div>
  );
}
