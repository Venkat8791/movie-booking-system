"use client";
import { useRouter } from "next/navigation";
import { ShowTimeDTO } from "../types/show";

type ShowTimeProps = {
  show: ShowTimeDTO;
  cinemaId: number;
  showDate: Date | string;
  movieId: number;
};

const ShowTime: React.FC<ShowTimeProps> = ({
  show,
  cinemaId,
  showDate,
  movieId,
}) => {
  const router = useRouter();
  const handleShowTimeClick = (showTimeId: number) => {
    router.replace(
      `/book/${showTimeId}?showDate=${showDate}&cinemaId=${cinemaId}&movieId=${movieId}`
    );
  };

  const daytime = parseInt(show.showTimeName.split(":")[0]);
  let seatStatusClass = "";
  if (show.availableSeats >= 0.8 * show.numOfSeats) {
    seatStatusClass = " text-green-600 border-1 ";
  } else if (show.availableSeats >= 0.5 * show.numOfSeats) {
    seatStatusClass = " text-yellow-600 border-1";
  } else {
    seatStatusClass = " text-red-600 border-1";
  }

  return (
    <button
      className={`px-2 py-1 sm:px-4 sm:py-2 text-sm font-medium shadow-md rounded border-gray-400${seatStatusClass}`}
      onClick={() => handleShowTimeClick(show.showTimeId)}
    >
      {show.showTimeName} {daytime < 12 ? "AM" : "PM"}
    </button>
  );
};

export default ShowTime;
