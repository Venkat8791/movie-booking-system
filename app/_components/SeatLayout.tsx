import React from "react";
import Seat from "./Seat";
import SeatLegend from "./SeatLegend";
import { SeatD, SeatLayoutDTO } from "../types/seatlayout";
import { SeatDetails, SeatType } from "../types/seat";

type SeatLayoutProps = {
  seatLayout: SeatLayoutDTO | null;
  selectedSeats: SeatDetails[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<SeatDetails[]>>;
  bookedSeats: Set<any> | null;
};

const SeatLayout: React.FC<SeatLayoutProps> = ({
  seatLayout,
  selectedSeats,
  setSelectedSeats,
  bookedSeats,
}) => {
  const handleSeatClick = (
    seat: SeatD,
    sectionName: SeatType,
    price: number
  ) => {
    setSelectedSeats((prev) => {
      const alreadySelected = prev.find((s) => s.seatId === seat.seatId);
      if (alreadySelected) {
        return prev.filter((s) => s.seatId !== seat.seatId);
      } else {
        return [...prev, { ...seat, seatType: sectionName, price: price }];
      }
    });
  };

  const isSeatSelected = (seat: SeatD) => {
    for (const selectedSeat of selectedSeats) {
      if (selectedSeat.seatId === seat.seatId) {
        return true;
      }
    }
    return false;
  };

  const isSeatBooked = (seat: SeatD) => {
    return bookedSeats ? bookedSeats.has(seat.seatId) : false;
  };

  // Extracted function to reduce nesting
  const renderSeat = (seat: SeatD, sectionName: SeatType, price: number) => (
    <Seat
      key={seat.seatId}
      seat={seat}
      handleSeatClick={() => handleSeatClick(seat, sectionName, price)}
      isSelected={isSeatSelected(seat)}
      isBooked={isSeatBooked(seat)}
    />
  );

  return (
    <div className="overflow-x-auto md:min-w-2/3">
      <div className="min-w-max">
        {seatLayout?.sections.map((section) => (
          <div
            key={section.sectionName}
            className="border-b-1 border-gray-300 p-2"
          >
            <p className="text-gray-500 text-sm mb-2">
              {`${
                "Rs. " + section.price + " " + section.sectionName.toUpperCase()
              }`}
            </p>
            <div className="flex flex-col gap-2">
              {section.rows.map((row) => (
                <div key={row.label} className="flex gap-2 items-center">
                  <p className="text-gray-500 text-sm w-7 h-7">{row.label}</p>
                  {row.seats.map((seat) =>
                    renderSeat(seat, section.sectionName, section.price)
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SeatLegend />
    </div>
  );
};

export default SeatLayout;
