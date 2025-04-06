import Image from "next/image";
import Link from "next/link";
import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="flex flex-col flex-grow bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105 hover:cursor-pointer">
      {/* <div className="relative w-full sm:h-56 xs:h-48 md:h-72 lg:h-96">
        <Image
          alt={movie.title}
          src={movie.poster}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          priority
        ></Image>
      </div> */}

      <div className="w-full max-w-xs mx-auto">
        <Image
          alt={movie.title}
          src={movie.posterUrl}
          width={500}
          height={750}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-gray-900 text-lg font-semibold">{movie.title}</h2>
          <p className="text-gray-600">{movie.genre}</p>
          <p className="text-gray-600 italic">{movie.language}</p>
          <p className="text-yellow-400 font-bold mt-1">⭐ {movie.rating}</p>
        </div>

        <Link href={`/movies/${movie.id}`} passHref>
          <button className="mt-3 w-full bg-[var(--accent)] text-white py-2 rounded hover:bg-[var(--accent-hover)] transition-colors">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
