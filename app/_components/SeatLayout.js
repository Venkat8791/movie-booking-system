import React from "react";
import Seat from "./Seat";
import SeatLegend from "./SeatLegend";
import { CloudCog } from "lucide-react";

function SeatLayout({
  seatLayout,
  selectedSeats,
  setSelectedSeats,
  bookedSeats,
}) {
  const handleSeatClick = (seat, sectionName, price) => {
    setSelectedSeats((prev) => {
      const alreadySelected = prev.find((s) => s.seatId === seat.seatId);
      if (alreadySelected) {
        return prev.filter((s) => s.seatId !== seat.seatId);
      } else {
        return [...prev, { ...seat, seatType: sectionName, price: price }];
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

  const isSeatBooked = (seat) => {
    return bookedSeats.has(seat.seatId);
  };

  return (
    <div className="overflow-x-auto md:min-w-2/3">
      <div className="min-w-max">
        {seatLayout.sections.map((section) => (
          <div
            key={section.sectionName}
            className="border-b-1 border-gray-300 p-2"
          >
            <p className="text-gray-500 text-sm mb-2">
              {`${
                "Rs. " + section.price + " " + section.sectionName.toUpperCase()
              }`}
            </p>
            <div className="flex flex-col">
              {section.rows.map((row) => (
                <div key={row.label} className="flex gap-1 items-center">
                  <p className="text-gray-500 text-sm ">{row.label}</p>
                  {row.seats.map((seat) => (
                    <Seat
                      key={seat.seatId}
                      seat={seat}
                      handleSeatClick={() =>
                        handleSeatClick(
                          seat,
                          section.sectionName,
                          section.price
                        )
                      }
                      isSelected={isSeatSelected(seat)}
                      seatType={section.sectionName}
                      isBooked={isSeatBooked(seat)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SeatLegend />
    </div>
  );
}

export default SeatLayout;
