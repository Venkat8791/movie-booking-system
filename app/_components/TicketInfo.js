import React from "react";

function TicketInfo({ premiumSeats, vipSeats, regularSeats }) {
  return (
    <div className="hidden md:block mt-1 p-2 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.6)]">
      <p className="uppercase text-sm text-gray-400 font-semibold">Tickets</p>
      {premiumSeats.length > 0 && (
        <div className="flex justify-between">
          <p>
            {premiumSeats.length} X {premiumSeats[0].price}
          </p>
          <p>$ {premiumSeats.length * premiumSeats[0].price}</p>
        </div>
      )}
      {vipSeats.length > 0 && (
        <div className="flex justify-between">
          <p>
            {vipSeats.length} X {vipSeats[0].price}
          </p>
          <p>$ {vipSeats.length * vipSeats[0].price}</p>
        </div>
      )}
      {regularSeats.length > 0 && (
        <div className="flex justify-between">
          <p>
            {regularSeats.length} X {regularSeats[0].price}
          </p>
          <p>$ {regularSeats.length * regularSeats[0].price}</p>
        </div>
      )}
    </div>
  );
}

export default TicketInfo;
