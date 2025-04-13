import BookingSummary from "@/app/_components/BookingSummary";
import SeatLayout from "@/app/_components/SeatLayout";
import SeatLayoutBookingSummary from "@/app/_components/SeatLayoutBookingSummary";
import { SelectedSeatsProvider } from "@/app/_context/SelectedSeatsProvider";
import { getSeatsForShowTime } from "@/app/_lib/showtime-data-service";

const groupSeatsByRow = (seats) => {
  return seats.reduce((acc, seat) => {
    if (!acc[seat.rowNumber]) {
      acc[seat.rowNumber] = [];
    }
    acc[seat.rowNumber].push(seat);
    return acc;
  }, {});
};

export default async function Page({ params }) {
  const { showTimeId } = await params;
  const showTimeInfo = await getSeatsForShowTime(showTimeId);
  const groupedSeats = groupSeatsByRow(showTimeInfo.seats);
  const daytime = parseInt(showTimeInfo.showTimeName.split(":")[0]);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col mb-4 shadow-sm rounded p-4">
        <h1>{showTimeInfo.movieName}</h1>
        <p>
          {showTimeInfo.cinemaName} | {showTimeInfo.showTimeName}
          {daytime < 12 ? "AM" : "PM"}
        </p>
      </div>

      <SelectedSeatsProvider>
        <SeatLayoutBookingSummary
          groupedSeats={groupedSeats}
          showTimeId={showTimeId}
        />
      </SelectedSeatsProvider>
    </div>
  );
}
