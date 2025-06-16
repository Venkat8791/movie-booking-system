import React from "react";
import { SeatDetails } from "../../types/seat";

type SeatInfoProps = {
  premiumSeats: SeatDetails[];
  vipSeats: SeatDetails[];
  regularSeats: SeatDetails[];
};

const SeatInfo: React.FC<SeatInfoProps> = ({
  premiumSeats,
  vipSeats,
  regularSeats,
}) => {
  return (
    <div className="hidden md:block mt-1 p-2 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.6)]">
      <p className="uppercase text-sm text-gray-400 font-semibold">Seat info</p>

      {vipSeats.length > 0 && (
        <div className="mb-2">
          <p className="uppercase text-sm">Vip</p>
          <div className="flex gap-2 items-center">
            {vipSeats.map((seat) => (
              <div
                key={seat.seatId}
                className="flex justify-center font-bold text-sm rounded  bg-purple-500"
              >
                <span className="px-2 py-1 border rounded text-white">
                  {seat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {premiumSeats.length > 0 && (
        <div className="mb-2">
          <p className="uppercase">Premium</p>
          <div className="flex gap-2 items-center">
            {premiumSeats.map((seat) => (
              <div
                key={seat.seatId}
                className="flex justify-center font-bold text-sm rounded  bg-yellow-500"
              >
                <span className="px-2 py-1 border rounded text-white">
                  {seat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {regularSeats.length > 0 && (
        <div className="mb-2">
          <p className="uppercase text-sm">Regular</p>

          <div className="flex gap-2 items-center">
            {regularSeats.map((seat) => (
              <div
                key={seat.seatId}
                className="flex justify-center font-bold text-sm rounded  bg-blue-500"
              >
                <span className="px-2 py-1 border rounded text-white">
                  {seat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatInfo;
