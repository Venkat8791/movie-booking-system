"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../types/movie";

type MovieCarouselProps = {
  movies: Movie[];
};

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  return (
    <div className="">
      <p className="text-xl font-bold mb-4">🎬 Now Playing</p>
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="w-full h-[80vh]"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="w-full h-full p-2 flex text-white  md:bg-gradient-to-l from-[#f59e0b] to-gray-800">
                {/* Poster on the Left */}
                <div className="w-full md:w-1/2 h-full ">
                  <Image
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-contain "
                    width={500}
                    height={500}
                  />
                </div>

                {/* Info on the Right */}
                <div className="hidden md:block md:w-1/2 px-6">
                  <p className="text-xl md:text-4xl font-bold mb-4">
                    {movie.title}
                  </p>
                  <p className="text-lg text-white mb-2">
                    Languages: {movie.languages.join(", ")}
                  </p>
                  <p className="text-sm text-white mb-4">
                    {movie.description?.slice(0, 150)}...
                  </p>
                  <button className="bg-red-500 px-4 py-2 rounded-md text-white hover:bg-red-600 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCarousel;
