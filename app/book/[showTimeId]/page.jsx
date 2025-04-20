import BookingSummary from "@/app/_components/BookingSummary";
import MovieHeaderInfo from "@/app/_components/MovieHeaderInfo";
import Seat from "@/app/_components/Seat";
import SeatLayout from "@/app/_components/SeatLayout";
import SeatLayoutBookingSummary from "@/app/_components/SeatLayoutBookingSummary";
import ShowTimesList from "@/app/_components/ShowTimesList";
import { SelectedSeatsProvider } from "@/app/_context/SelectedSeatsProvider";
import { getSeatLayout } from "@/app/_lib/layout-data-service";
import {
  getOtherShowTimes,
  getSeatsBookedForShowTime,
} from "@/app/_lib/showtime-data-service";

const groupSeatsByRow = (seats) => {
  return seats.reduce((acc, seat) => {
    if (!acc[seat.rowNumber]) {
      acc[seat.rowNumber] = [];
    }
    acc[seat.rowNumber].push(seat);
    return acc;
  }, {});
};

const bookedSeatsSet = (seats) => {
  const bookedSeats = new Set();
  seats.forEach((seat) => {
    bookedSeats.add(seat.seatId);
  });
  return bookedSeats;
};

export default async function Page({ params, searchParams }) {
  const { showTimeId } = await params;
  const { movieId, cinemaId, showDate } = await searchParams;

  const bookedSeatsInfo = await getSeatsBookedForShowTime(showTimeId);
  const seatLayout = await getSeatLayout(showTimeId);
  const otherShowTimes = await getOtherShowTimes(movieId, cinemaId, showDate);

  // const groupedSeats = groupSeatsByRow(showTimeInfo.seats);

  return (
    <div className="flex flex-col gap-2">
      <MovieHeaderInfo showTimeInfo={bookedSeatsInfo} movieId={movieId} />
      <ShowTimesList showTimes={otherShowTimes} />

      {bookedSeatsInfo.seats.length === 0 ? (
        <p className="p-4 bg-red-200 flex justify-center mx-auto text-gray-500 rounded">
          Seat Layout Not yet added. Please try after sometime
        </p>
      ) : (
        <SelectedSeatsProvider>
          <SeatLayoutBookingSummary
            bookedSeats={bookedSeatsSet(bookedSeatsInfo.seats)}
            seatLayout={seatLayout}
            showTimeId={showTimeId}
          />
        </SelectedSeatsProvider>
      )}
    </div>
  );
}
