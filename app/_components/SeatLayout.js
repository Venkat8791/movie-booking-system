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
    </div>
  );
}

export default SeatLayout;
