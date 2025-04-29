import React from "react";
import ShowTime from "./ShowTime";

function ShowTimesList({ showTimes, error }) {
  if (error) {
    return (
      <div className="p-4 bg-red-200 flex justify-center mx-auto text-gray-500 rounded font-semibold">
        <p className="font-semibold text-red-500">{error.message}</p>
      </div>
    );
  }
  return (
    <div className="flex gap-2 m-2">
      {showTimes.shows.map((show) => (
        <ShowTime
          key={show.showTimeId}
          show={show}
          showDate={showTimes.showDate}
          cinemaId={showTimes.cinemaId}
          movieId={showTimes.movieId}
        />
      ))}
    </div>
  );
}

export default ShowTimesList;
