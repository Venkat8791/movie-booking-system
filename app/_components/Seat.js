import React from "react";

function Seat({ seat, handleSeatClick, isSelected }) {
  return (
    <button
      role="button"
      className={`min-w-[32px] min-h-[32px] border text-xs rounded-sm ${
        seat.status === "BOOKED"
          ? "bg-gray-200 text-white cursor-not-allowed"
          : "border-green-400 text-green-400 hover:bg-green-500 hover:text-white"
      } ${isSelected === true ? "bg-green-500 text-white" : ""}`}
      disabled={seat.status === "BOOKED"}
      onClick={() => handleSeatClick(seat)}
    >
      {seat.columnNumber}
    </button>
  );
}

export default Seat;
