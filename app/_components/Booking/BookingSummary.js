"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SeatInfo from "./SeatInfo";
import TicketInfo from "./TicketInfo";
import PaymentInfo from "./PaymentInfo";
import { useAuth } from "@/app/_context/AuthProvider";

function BookingSummary({ selectedSeats, showTimeId }) {
  const router = useRouter();
  const auth = useAuth();
  const handleBooking = async (e) => {
    e.preventDefault();
    if (!auth.isAuthenticated) {
      router.push("/login");
    }
    const bookingRequest = {
      showTimeId,
      seatIds: selectedSeats.map((seat) => seat.seatId),
      totalPrice: selectedSeats.reduce((acc, seat) => acc + seat.price, 0),
    };

    try {
      const response = await fetch(
        "http://localhost:8080/mxmovies/v1/bookings",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
          },
          body: JSON.stringify(bookingRequest),
        }
      );

      if (response.ok) {
        const data = await response.json();
        router.push("/bookings/" + data.bookingId);
        router.refresh();
      } else {
        // handle error response
        console.error("Booking failed");
      }
    } catch (error) {
      console.error("Booking error:", error);
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
            className="hidden md:block text-white px-4 py-2 rounded mt-2 w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)]"
            type="submit"
          >
            Proceed
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
}

export default BookingSummary;
