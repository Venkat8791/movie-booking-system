import React from "react";
import MovieCard from "../_components/MovieCard";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    poster: "/movies/Interstellar.jpg",
    rating: "8.6",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    language: ["English", "Hindi"],
    releaseYear: 2014,
  },
  {
    id: 2,
    title: "The Dark Knight",
    poster: "/movies/DarkKnight.jpg",
    rating: "9.0",
    genre: ["Action", "Crime", "Drama"],
    language: ["English", "Telugu"],
    releaseYear: 2008,
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    poster: "/movies/EndGame.jpg",
    rating: "8.4",
    genre: ["Action", "Adventure", "Sci-Fi"],
    language: ["English"],
    releaseYear: 2019,
  },
  {
    id: 4,
    title: "Parasite",
    poster: "/movies/Parasite.jpg",
    rating: "8.6",
    genre: ["Drama", "Thriller"],
    language: ["English", "Tamil"],
    releaseYear: 2019,
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    poster: "/movies/NoWayHome.jpg",
    rating: "8.3",
    genre: ["Action", "Adventure", "Fantasy"],
    language: ["English", "Telugu", "Hindi"],
    releaseYear: 2021,
  },
  {
    id: 6,
    title: "Interstellar",
    poster: "/movies/Interstellar.jpg",
    rating: "8.6",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    language: ["English", "Hindi"],
    releaseYear: 2014,
  },
  {
    id: 7,
    title: "The Dark Knight",
    poster: "/movies/DarkKnight.jpg",
    rating: "9.0",
    genre: ["Action", "Crime", "Drama"],
    language: ["English", "Telugu"],
    releaseYear: 2008,
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    poster: "/movies/EndGame.jpg",
    rating: "8.4",
    genre: ["Action", "Adventure", "Sci-Fi"],
    language: ["English"],
    releaseYear: 2019,
  },
  {
    id: 9,
    title: "Parasite",
    poster: "/movies/Parasite.jpg",
    rating: "8.6",
    genre: ["Drama", "Thriller"],
    language: ["English", "Tamil"],
    releaseYear: 2019,
  },
  {
    id: 10,
    title: "Spider-Man: No Way Home",
    poster: "/movies/NoWayHome.jpg",
    rating: "8.3",
    genre: ["Action", "Adventure", "Fantasy"],
    language: ["English", "Telugu", "Hindi"],
    releaseYear: 2021,
  },
];

export const metadata = {
  title: "Movies",
};

export default function Page() {
  return (
    <div>
      <h1>Now Showing</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
