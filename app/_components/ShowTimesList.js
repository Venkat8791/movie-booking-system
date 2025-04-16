import React from "react";
import ShowTime from "./ShowTime";

function ShowTimesList({ showTimes }) {
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
