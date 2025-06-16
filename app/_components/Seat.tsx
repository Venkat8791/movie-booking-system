"use client";

import { SeatD } from "../types/seatlayout";

type SeatProps = {
  seat: SeatD;
  isBooked: boolean;
  isSelected: boolean;
  handleSeatClick: (seat: SeatD) => void;
};
const Seat: React.FC<SeatProps> = ({
  seat,
  isBooked,
  isSelected,
  handleSeatClick,
}) => {
  if (seat.gap === true) {
    return <div className="w-7 h-7"></div>;
  }

  return (
    <button
      className={`w-7 h-7 border text-[12px] ${
        isBooked
          ? "bg-gray-200 border-gray-200 text-white cursor-not-allowed"
          : "border-[#1ea83c] text-[#1ea83c] hover:bg-green-500 hover:text-white"
      } ${isSelected === true ? "bg-green-500 text-white" : ""}`}
      disabled={isBooked}
      onClick={() => handleSeatClick(seat)}
    >
      {seat.label.substring(1, 3)}
    </button>
  );
};

export default Seat;
