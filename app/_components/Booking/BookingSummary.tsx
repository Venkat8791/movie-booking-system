"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SeatInfo from "./SeatInfo";
import TicketInfo from "./TicketInfo";
import PaymentInfo from "./PaymentInfo";
import Spinner from "../Spinner";
import { useAuth } from "../../_context/AuthProvider";
import useApi from "../../hooks/useApi";
import { BookingRequest } from "../../types/booking";
import { SeatDetails } from "../../types/seat";
import { bookShow } from "../../_lib/booking-data-service";

type BookingSummaryProps = {
  selectedSeats: SeatDetails[];
  showTimeId: number;
};

const BookingSummary: React.FC<BookingSummaryProps> = ({
  selectedSeats,
  showTimeId,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fullPath = `${pathname}?${searchParams.toString()}`;
  const { auth } = useAuth();

  const { loading, error, callApi } = useApi(bookShow);
  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!auth.isAuthenticated) {
      router.push(`/login?redirect=${encodeURIComponent(fullPath)}`);
      return;
    }

    const bookingRequest: BookingRequest = {
      showTimeId,
      seatIds: selectedSeats.map((seat) => seat.seatId),
      totalPrice: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
    };

    const bookingResponse = await callApi(bookingRequest);
    if (bookingResponse) {
      router.push(`/bookings/${bookingResponse.bookingId}`);
    }
  };

  const premiumSeats = selectedSeats.filter(
    (seat) => seat.seatType === "PREMIUM"
  );
  const vipSeats = selectedSeats.filter((seat) => seat.seatType === "VIP");
  const regularSeats = selectedSeats.filter(
    (seat) => seat.seatType === "REGULAR"
  );

  const totalAmount = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 bg-red-400">
        <p className="font-semibold text-gray-500">
          Booking Failed. Please try again
        </p>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:w-1/3 shadow-lg md:max-h-[100vh]">
      <p className="hidden md:block border-b-1 text-xl font-semibold text-gray-600 uppercase">
        Bookings Summary
      </p>
      {selectedSeats.length === 0 && (
        <div className="hidden md:flex flex-col items-center justify-center h-full">
          <Image
            src="/SelectSeats.png"
            alt="Select Seats"
            className="[@media(max-height:400px)]:hidden"
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
        <form onSubmit={handleBooking}>
          <button
            disabled={loading}
            className="hidden md:block text-white px-4 py-2 rounded mt-2 w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)]"
            type="submit"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Spinner /> Booking...
              </span>
            ) : (
              "Proceed"
            )}
          </button>
        </form>
      )}

      {selectedSeats.length > 0 && (
        <form onSubmit={handleBooking}>
          <button className="fixed bottom-1 left-0 z-50 mx-auto block md:hidden text-white px-4 py-2 rounded  w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)]">
            <div className="flex justify-between">
              <p>{selectedSeats.length} tickets</p>
              <p>Rs {totalAmount}</p>
            </div>
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingSummary;
