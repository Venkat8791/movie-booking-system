"use client";
import { useSelectedSeats } from "../_context/SelectedSeatsProvider";
import SeatLayout from "./SeatLayout";
import BookingSummary from "./BookingSummary";

function SeatLayoutBookingSummary({ groupedSeats, showTimeId }) {
  const { selectedSeats, setSelectedSeats } = useSelectedSeats();
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <SeatLayout
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        seats={groupedSeats}
      />
      <BookingSummary selectedSeats={selectedSeats} showTimeId={showTimeId} />
    </div>
  );
}

export default SeatLayoutBookingSummary;
