"use client";

import { useRouter } from "next/navigation";
import { ApiError } from "../types/error";
import { GetShowTimeSeatLayoutDTO } from "../types/seat";

type MovieHeaderInfoProps = {
  showTimeInfo: GetShowTimeSeatLayoutDTO | null;
  movieId: number;
  error: ApiError;
};

const MovieHeaderInfo: React.FC<MovieHeaderInfoProps> = ({
  showTimeInfo,
  movieId,
  error,
}) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long", // Tuesday
      month: "short", // Apr
      day: "numeric", // 15
      year: "numeric", // 2025
    });

    return formattedDate;
  };

  const router = useRouter();

  const daytime = showTimeInfo?.showTimeName
    ? parseInt(showTimeInfo.showTimeName.split(":")[0])
    : null;

  const handleBackNavigation = () => {
    router.replace("/movies/" + movieId);
    router.refresh();
  };

  if (error) {
    return (
      <div className="flex flex-col gap-2">
        <h1 className="text-red-500">{error.message}</h1>
      </div>
    );
  }

  return (
    <div className=" flex gap-4 mb-4 shadow-sm rounded p-4">
      <div className="flex flex-col items-center justify-center ">
        <button onClick={() => handleBackNavigation()}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5m7-7l-7 7 7 7"></path>
          </svg>
        </button>
      </div>
      <div className="flex flex-col">
        <h1>{showTimeInfo?.movieName}</h1>
        <p>
          {showTimeInfo &&
            `${showTimeInfo.cinemaName} | ${formatDate(
              showTimeInfo.showDate
            )} | ${showTimeInfo.showTimeName}${
              daytime !== null && daytime < 12 ? "AM" : "PM"
            }`}
        </p>
      </div>
    </div>
  );
};

export default MovieHeaderInfo;
