import React from "react";
import ShowTime from "./ShowTime";

function ShowCinemasSection({ cinemas, showDate, movieId }) {
  if (!cinemas || cinemas.length === 0) {
    return (
      <div className="mt-4 p-2 bg-red-400 flex flex-col items-center mx-auto  rounded">
        <p className="font-semibold">
          No Shows Playing with the selected Language. Please change the
          language
        </p>
      </div>
    );
  }
  return (
    <div>
      {cinemas.map((cinema, idx) => (
        <div key={idx} className="border-b-1 border-gray-400 mt-4 p-2 ">
          <p className="font-bold mb-2">{cinema.cinemaName}</p>
          <div className="flex flex-wrap gap-2">
            {cinema.shows.map((show, idx) => (
              <ShowTime
                key={idx}
                show={show}
                cinemaId={cinema.cinemaId}
                showDate={showDate}
                movieId={movieId}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowCinemasSection;
