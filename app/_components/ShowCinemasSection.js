import React from "react";
import ShowTime from "./ShowTime";

function ShowCinemasSection({ cinemas }) {
  return (
    <div>
      {cinemas.map((cinema, idx) => (
        <div key={idx} className="shadow-md p-4 m-2 rounded-lg">
          <p className="font-bold mb-2">{cinema.cinemaName}</p>
          <div className="flex flex-wrap gap-2">
            {cinema.shows.map((show, idx) => (
              <ShowTime key={idx} show={show} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowCinemasSection;
