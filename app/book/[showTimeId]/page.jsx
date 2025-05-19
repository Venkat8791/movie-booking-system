import MovieHeaderInfo from "@/app/_components/MovieHeaderInfo";
import SeatLayoutBookingSummary from "@/app/_components/Booking/SeatLayoutBookingSummary";
import ShowTimesList from "@/app/_components/ShowTimesList";
import { SelectedSeatsProvider } from "@/app/_context/SelectedSeatsProvider";
import { getSeatLayout } from "@/app/_lib/layout-data-service";
import {
  getOtherShowTimes,
  getSeatsBookedForShowTime,
} from "@/app/_lib/showtime-data-service";

// const groupSeatsByRow = (seats) => {
//   return seats.reduce((acc, seat) => {
//     if (!acc[seat.rowNumber]) {
//       acc[seat.rowNumber] = [];
//     }
//     acc[seat.rowNumber].push(seat);
//     return acc;
//   }, {});
// };

export default async function Page({ params, searchParams }) {
  const { showTimeId } = await params;
  const { movieId, cinemaId, showDate } = await searchParams;
  let bookedSeatsInfo = null;
  let seatLayout = null;
  let otherShowTimes = null;
  let bookedSeatsInfoError = null;
  let seatLayoutError = null;
  let otherShowTimesError = null;

  try {
    bookedSeatsInfo = await getSeatsBookedForShowTime(showTimeId);
  } catch (error) {
    bookedSeatsInfoError = error;
  }

  try {
    seatLayout = await getSeatLayout(showTimeId);
  } catch (error) {
    seatLayoutError = error;
  }
  try {
    otherShowTimes = await getOtherShowTimes(movieId, cinemaId, showDate);
  } catch (error) {
    otherShowTimesError = error;
  }

  return (
    <div className="flex flex-col gap-2">
      <MovieHeaderInfo
        showTimeInfo={bookedSeatsInfo}
        movieId={movieId}
        error={bookedSeatsInfoError}
      />
      <ShowTimesList showTimes={otherShowTimes} error={otherShowTimesError} />

      <SelectedSeatsProvider>
        <SeatLayoutBookingSummary
          bookedSeatsInfo={bookedSeatsInfo}
          seatLayout={seatLayout}
          showTimeId={showTimeId}
          error={seatLayoutError}
        />
      </SelectedSeatsProvider>
    </div>
  );
}
