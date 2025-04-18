import BookingSummary from "@/app/_components/BookingSummary";
import MovieHeaderInfo from "@/app/_components/MovieHeaderInfo";
import SeatLayout from "@/app/_components/SeatLayout";
import SeatLayoutBookingSummary from "@/app/_components/SeatLayoutBookingSummary";
import ShowTimesList from "@/app/_components/ShowTimesList";
import { SelectedSeatsProvider } from "@/app/_context/SelectedSeatsProvider";
import {
  getOtherShowTimes,
  getSeatsForShowTime,
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

export default async function Page({ params, searchParams }) {
  const { showTimeId } = await params;
  const { movieId, cinemaId, showDate } = await searchParams;
  const [showTimeInfo, otherShowTimes] = await Promise.all([
    getSeatsForShowTime(showTimeId),
    getOtherShowTimes(movieId, cinemaId, showDate),
  ]);

  const groupedSeats = groupSeatsByRow(showTimeInfo.seats);

  return (
    <div className="flex flex-col gap-2">
      <MovieHeaderInfo showTimeInfo={showTimeInfo} movieId={movieId} />
      <ShowTimesList showTimes={otherShowTimes} />

      {showTimeInfo.seats.length === 0 ? (
        <p className="p-4 bg-red-200 flex justify-center mx-auto text-gray-500 rounded">
          Seat Layout Not yet added. Please try after sometime
        </p>
      ) : (
        <SelectedSeatsProvider>
          <SeatLayoutBookingSummary
            groupedSeats={groupedSeats}
            showTimeId={showTimeId}
          />
        </SelectedSeatsProvider>
      )}
    </div>
  );
}
