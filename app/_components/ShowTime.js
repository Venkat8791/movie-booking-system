"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ShowTime({ show, cinemaId, showDate, movieId }) {
  const router = useRouter();
  console.log("showDate" + showDate);
  const handleShowTimeClick = (showTimeId) => {
    router.push(
      `/book/${showTimeId}?showDate=${showDate}&cinemaId=${cinemaId}&movieId=${movieId}`
    );
  };

  const daytime = parseInt(show.showTimeName.split(":")[0]);
  return (
    <button
      className={`px-2 py-1 sm:px-4 sm:py-2 text-sm font-medium shadow-md rounded border-gray-400
                  ${
                    show.availableSeats >= 0.8 * show.numOfSeats
                      ? " text-green-600 border-1 "
                      : show.availableSeats >= 0.5 * show.numOfSeats
                      ? " text-yellow-600 border-1"
                      : " text-red-600 border-1"
                  }`}
      onClick={() => handleShowTimeClick(show.showTimeId)}
    >
      {show.showTimeName} {daytime < 12 ? "AM" : "PM"}
    </button>
  );
}

export default ShowTime;
