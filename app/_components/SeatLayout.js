import React from "react";
import Seat from "./Seat";

function SeatLayout({ seats, selectedSeats, setSelectedSeats }) {
  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) => {
      const alreadySelected = prev.find((s) => s.seatId === seat.seatId);
      if (alreadySelected) {
        return prev.filter((s) => s.seatId !== seat.seatId);
      } else {
        return [...prev, seat];
      }
    });
  };

  const isSeatSelected = (seat) => {
    for (const selectedSeat of selectedSeats) {
      if (selectedSeat.seatId === seat.seatId) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="overflow-x-auto md:min-w-2/3">
      <div className="min-w-max">
        {Object.entries(seats).map(([row, seats]) => (
          <div className="flex gap-2 items-center mb-2" key={row}>
            <span className="w-6">{row}</span>
            {seats.map((seat) => (
              <Seat
                seat={seat}
                key={seat.seatId}
                handleSeatClick={handleSeatClick}
                isSelected={isSeatSelected(seat)}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mb-6 mt-4">
        <div className="w-60 h-2 bg-gray-300 rounded-full shadow-inner transform scale-x-110"></div>
        <span className="text-sm text-gray-600 uppercase tracking-wide mb-2">
          All eyes this way please
        </span>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
        {/* Available */}
        <div className="flex items-center gap-2">
          <button className="w-5 h-5 border-1 border-green-400 bg-white rounded-sm"></button>
          <span className="text-sm text-gray-700">Available</span>
        </div>

        {/* Selected */}
        <div className="flex items-center gap-2">
          <button className="w-5 h-5 border-1 border-green-400 bg-green-400 rounded-sm"></button>
          <span className="text-sm text-gray-700">Selected</span>
        </div>

        {/* Booked */}
        <div className="flex items-center gap-2">
          <button className="w-5 h-5 border-1 border-white bg-gray-400 cursor-not-allowed rounded-sm"></button>
          <span className="text-sm text-gray-700">Booked</span>
        </div>
      </div>
    </div>
  );
}

export default SeatLayout;
