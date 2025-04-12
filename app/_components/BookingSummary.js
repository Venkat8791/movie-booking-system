import React from "react";
import SeatInfo from "./SeatInfo";
import TicketInfo from "./TicketInfo";
import PaymentInfo from "./PaymentInfo";
import Image from "next/image";

function BookingSummary({ selectedSeats }) {
  const premiumSeats = selectedSeats.filter(
    (seat) => seat.seatType === "PREMIUM"
  );
  const vipSeats = selectedSeats.filter((seat) => seat.seatType === "VIP");
  const regularSeats = selectedSeats.filter(
    (seat) => seat.seatType === "REGULAR"
  );

  const totalAmount = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);

  return (
    <div className="shadow-md p-4 w-1/3">
      <h1 className="border-b-1">Bookings Summary</h1>
      {selectedSeats.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <Image
            src="/SelectSeats.png"
            alt="Select Seats"
            width={100}
            height={100}
          />
          <p className="font-semibold">No seats selected.</p>
          <p className="text-gray-400">Please select seats to proceed</p>
        </div>
      )}
      {selectedSeats.length > 0 && (
        <SeatInfo
          premiumSeats={premiumSeats}
          vipSeats={vipSeats}
          regularSeats={regularSeats}
        />
      )}

      {selectedSeats.length > 0 && (
        <TicketInfo
          premiumSeats={premiumSeats}
          vipSeats={vipSeats}
          regularSeats={regularSeats}
        />
      )}

      {selectedSeats.length > 0 && <PaymentInfo totalAmount={totalAmount} />}
      {selectedSeats.length > 0 && (
        <button className="text-white px-4 py-2 rounded mt-2 w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
          Proceed
        </button>
      )}
    </div>
  );
}

export default BookingSummary;
