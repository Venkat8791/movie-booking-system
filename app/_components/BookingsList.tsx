import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BookingDetailsDTO } from "../types/booking";

type BookingListProps = {
  bookings: BookingDetailsDTO[];
};

const BookingsList: React.FC<BookingListProps> = ({ bookings }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 px-4 py-8">
      {bookings.map((booking) => (
        <div
          key={booking.bookingId}
          className="bg-white shadow-lg rounded-2xl flex justify-between overflow-hidden "
        >
          <div className="hidden md:block w-[150px] h-[150px]">
            <Image
              src={booking.movie.posterUrl}
              alt={booking.movie.title}
              width={100}
              height={100}
              className="object-cover rounded"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row p-2 justify-around w-[100%] md:w-[70%] ">
            <div className="flex flex-col justify-center items-start">
              <p className="text-md font-semibold">{booking.movie.title}</p>
              <p className="text-green-300 font-bold">Tickets Booked</p>
              <p className="text-sm">11 Jan 2024 07:39PM</p>
            </div>
            <div className="flex flex-col justify-center items-start ">
              <button
                onClick={() => router.push(`/bookings/${booking.bookingId}`)}
                className="w-full bg-[var(--accent)] text-white px-2 py-1 rounded hover:bg-[var(--accent-hover)] transition-colors "
              >
                View Booking
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingsList;
