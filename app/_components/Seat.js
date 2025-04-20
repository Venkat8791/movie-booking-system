"use client";

function Seat({ seat, handleSeatClick, isSelected, isBooked }) {
  if (seat.gap === true) {
    return <div className="min-w-[32px] min-h-[32px] "></div>;
  }

  return (
    <button
      role="button"
      className={`min-w-[24px] min-h-[24px] border text-[12px] ${
        isBooked
          ? "bg-gray-200 text-white cursor-not-allowed"
          : "border-green-400 text-green-400 hover:bg-green-500 hover:text-white"
      } ${isSelected === true ? "bg-green-500 text-white" : ""}`}
      disabled={seat.status === "BOOKED"}
      onClick={() => handleSeatClick(seat)}
    >
      {seat.label}
    </button>
  );
}

export default Seat;
