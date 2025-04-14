"use client";
import { useRouter } from "next/navigation";
import React from "react";

function ShowTime({ show }) {
  const router = useRouter();

  const handleShowTimeClick = (showTimeId) => {
    router.push(`/book/${showTimeId}`);
  };

  const daytime = parseInt(show.showTimeName.split(":")[0]);
  return (
    <button
      className={`px-4 py-2 sm:px-8 sm:py-4 text-sm font-medium shadow-md rounded
                  ${
                    show.availableSeats >= 0.8 * show.numOfSeats
                      ? "bg-green-50 text-green-500 border-1"
                      : show.availableSeats >= 0.5 * show.numOfSeats
                      ? "bg-yellow-100 text-yellow-500 border-yellow-500"
                      : "bg-red-100 text-red-500 border-red-500"
                  }`}
      onClick={() => handleShowTimeClick(show.showTimeId)}
    >
      {show.showTimeName} {daytime < 12 ? "AM" : "PM"}
    </button>
  );
}

export default ShowTime;
