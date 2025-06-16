"use client";
import { useSelectedSeats } from "../../_context/SelectedSeatsProvider";
import { BookedSeatsDTO, SeatDTO } from "../../types/seat";
import { SeatLayoutDTO } from "../../types/seatlayout";
import SeatLayout from "../SeatLayout";
import BookingSummary from "./BookingSummary";

type SeatLayoutBookingSummaryProps = {
  seatLayout: SeatLayoutDTO | null;
  showTimeId: number;
  bookedSeatsInfo: BookedSeatsDTO | null;
  error: string | null;
};

const SeatLayoutBookingSummary: React.FC<SeatLayoutBookingSummaryProps> = ({
  seatLayout,
  showTimeId,
  bookedSeatsInfo,
  error,
}) => {
  const { selectedSeats, setSelectedSeats } = useSelectedSeats();
  const bookedSeatsSet = (seats: SeatDTO[]) => {
    const bookedSeats = new Set();
    seats.forEach((seat) => {
      bookedSeats.add(seat.seatId);
    });
    return bookedSeats;
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-4 bg-red-400">
        <p className="font-semibold text-gray-500">
          Seats not yet added for this show. Please try again
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <SeatLayout
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        seatLayout={seatLayout}
        bookedSeats={bookedSeatsSet(
          bookedSeatsInfo ? bookedSeatsInfo.seats : []
        )}
      />
      {selectedSeats.length > 0 && (
        <BookingSummary selectedSeats={selectedSeats} showTimeId={showTimeId} />
      )}
    </div>
  );
};

export default SeatLayoutBookingSummary;
