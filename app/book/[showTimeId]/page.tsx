import { NextPage } from "next";
import MovieHeaderInfo from "../../_components/MovieHeaderInfo";
import ShowTimesList from "../../_components/ShowTimesList";
import { SelectedSeatsProvider } from "../../_context/SelectedSeatsProvider";
import SeatLayoutBookingSummary from "../../_components/Booking/SeatLayoutBookingSummary";
import {
  getOtherShowTimes,
  getSeatsBookedForShowTime,
} from "../../_lib/showtime-data-service";
import { getSeatLayout } from "../../_lib/layout-data-service";

type PageProps = {
  params: { showTimeId: number };
  searchParams: {
    [key: string]: any;
  };
};

const BookPage: NextPage<PageProps> = async ({ params, searchParams }) => {
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
  } catch (error: any) {
    bookedSeatsInfoError = error;
  }

  try {
    seatLayout = await getSeatLayout(showTimeId);
  } catch (error: any) {
    seatLayoutError = error;
  }
  try {
    otherShowTimes = await getOtherShowTimes(movieId, cinemaId, showDate);
  } catch (error: any) {
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
};

export default BookPage;
