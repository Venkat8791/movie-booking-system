import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const BookingsList = ({ bookings }) => {
  const router = useRouter();
  console.log(bookings);
  return (
    <div className="flex flex-col gap-2 px-4 py-8 max-w-[50vw]">
      {bookings.map((booking) => (
        <div
          key={booking.bookingId}
          className="bg-white shadow-lg rounded-2xl flex overflow-hidden "
        >
          <div className="w-[150px] h-[150px]">
            <Image
              src={booking.movie.posterUrl}
              alt={booking.movie.title}
              width={100}
              height={100}
              className="object-cover rounded"
            />
          </div>
          <div className="flex flex-col p-2 justify-between">
            <div>
              <p className="text-md font-semibold">{booking.movie.title}</p>
              <p className="text-green-300 font-bold">Tickets Booked</p>
              <p className="text-sm">11 Jan 2024, 07:39PM</p>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => router.push(`/bookings/${booking.bookingId}`)}
                className="w-full bg-[var(--accent)] text-white p-1 rounded hover:bg-[var(--accent-hover)] transition-colors "
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingsList;
