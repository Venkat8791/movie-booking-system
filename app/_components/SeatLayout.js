import React from "react";

function SeatLayout({ seats }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        {Object.entries(seats).map(([row, seats]) => (
          <div key={row} className="flex gap-2 items-center mb-2">
            <span className="w-6">{row}</span>
            {seats.map((seat) => (
              <button
                key={seat.seatId}
                className={`min-w-[32px] min-h-[32px] border text-xs rounded-sm ${
                  seat.status === "BOOKED"
                    ? "bg-gray-200 text-white"
                    : "border-green-400 text-green-400 hover:bg-green-500 hover:text-white"
                }`}
                disabled={seat.status === "Booked"}
              >
                {seat.columnNumber}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatLayout;
